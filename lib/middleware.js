'use strict';

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

var _isObject = require('lodash/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CALL_GROUT = exports.Schemas = undefined;

var _normalizr = require('normalizr');

var _humps = require('humps');

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function callGrout(callInfoObj) {
  var model = callInfoObj.model;
  var subModel = callInfoObj.subModel;
  var subModelData = callInfoObj.subModelData;
  var method = callInfoObj.method;
  var schema = callInfoObj.schema;
  var modelData = callInfoObj.modelData;
  var methodData = callInfoObj.methodData;

  var grout = (0, _index.getGrout)();
  if (!(0, _isArray2.default)(modelData)) {
    modelData = [modelData];
  }
  if (model) {
    grout = (0, _isObject2.default)(modelData) || (0, _isString2.default)(modelData) ? grout[model].apply(grout, modelData) : grout[model];
  }
  if (subModel) {
    grout = grout[subModel];
  }
  if (!(0, _isArray2.default)(methodData)) {
    methodData = [methodData];
  }
  return grout[method].apply(grout, methodData).then(function (response) {
    var endResult = undefined;
    if (schema) {
      var camelizedJson = (0, _humps.camelizeKeys)(response);
      endResult = Object.assign({}, (0, _normalizr.normalize)(camelizedJson, schema));
    } else {
      endResult = response;
    }
    return endResult;
  }, function (err) {
    console.error('Error calling grout', err);
    return Promise.reject(err);
  });
}

// We use this Normalizr schemas to transform API responses from a nested form
// to a flat form where repos and users are placed in `entities`, and nested
// JSON objects are replaced with their IDs. This is very convenient for
// consumption by reducers, because we can easily build a normalized tree
// and keep it updated as we fetch more data.

// Read more about Normalizr: https://github.com/gaearon/normalizr

var accountSchema = new _normalizr.Schema('accounts', {
  idAttribute: 'id'
});
var projectSchema = new _normalizr.Schema('projects', {
  idAttribute: 'name'
});
var templateSchema = new _normalizr.Schema('templates', {
  idAttribute: 'id'
});
var groupSchema = new _normalizr.Schema('groups', {
  idAttribute: 'id'
});
projectSchema.define({
  owner: accountSchema,
  collaborators: (0, _normalizr.arrayOf)(accountSchema)
});
// Schemas for Tessellate API responses
var Schemas = exports.Schemas = {
  ACCOUNT: accountSchema,
  ACCOUNT_ARRAY: (0, _normalizr.arrayOf)(accountSchema),
  PROJECT: projectSchema,
  PROJECT_ARRAY: (0, _normalizr.arrayOf)(projectSchema),
  GROUP: groupSchema,
  GROUP_ARRAY: (0, _normalizr.arrayOf)(groupSchema)
};

// Action key that carries API call info interpreted by this Redux middleware.
var CALL_GROUT = exports.CALL_GROUT = Symbol('Call Grout');

// A Redux middleware that interprets actions with CALL_GROUT info specified.
// Performs the call and promises when such actions are dispatched.

exports.default = function (store) {
  return function (next) {
    return function (action) {
      var callAPI = action[CALL_GROUT];
      if (typeof callAPI === 'undefined') {
        return next(action);
      }

      var model = callAPI.model;
      var modelData = callAPI.modelData;
      var subModel = callAPI.subModel;
      var subModelData = callAPI.subModelData;
      var method = callAPI.method;
      var methodData = callAPI.methodData;
      var cb = callAPI.cb;
      var schema = callAPI.schema;
      var types = callAPI.types;
      var redirect = callAPI.redirect;

      if (typeof method === 'function') {
        method = method(store.getState());
      }

      if (typeof method !== 'string') {
        throw new Error('Specify a method.');
      }

      if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Expected an array of three action types.');
      }

      if (!types.every(function (type) {
        return typeof type === 'string';
      })) {
        throw new Error('Expected action types to be strings.');
      }

      function actionWith(data) {
        var finalAction = Object.assign({}, action, data);
        delete finalAction[CALL_GROUT];
        return finalAction;
      }

      var _types = _slicedToArray(types, 3);

      var requestType = _types[0];
      var successType = _types[1];
      var failureType = _types[2];

      next(actionWith({ type: requestType }));
      var callInfoObj = { model: model, modelData: modelData, subModel: subModel, subModelData: subModelData, method: method, methodData: methodData, schema: schema };
      return callGrout(callInfoObj).then(function (response) {
        return next(actionWith({
          response: response,
          type: successType
        }));
      }, function (error) {
        return next(actionWith({
          type: failureType,
          error: error.message || error || 'Something bad happened'
        }));
      });
    };
  };
};