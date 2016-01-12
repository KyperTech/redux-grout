'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.files = exports.projects = exports.account = undefined;
exports.getProjectFromData = getProjectFromData;

var _account2 = require('./account');

var _account = _interopRequireWildcard(_account2);

var _projects2 = require('./projects');

var _projects = _interopRequireWildcard(_projects2);

var _files2 = require('./files');

var _files = _interopRequireWildcard(_files2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.account = _account;
exports.projects = _projects;
exports.files = _files;
function getProjectFromData(data) {
  var project = data.project;
  var projectName = data.projectName;

  var modelData = undefined;
  if (!projectName && (!project || !project.name)) {
    console.error('Project or projectName is required.');
    return null;
  }
  if (project) {
    modelData = project;
  } else {
    modelData.name = projectName;
  }
  return modelData;
}