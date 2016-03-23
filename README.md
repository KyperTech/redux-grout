# Redux Grout

[![NPM version][npm-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][climate-image]][climate-url]
[![Code Coverage][coverage-image]][coverage-url]
[![License][license-image]][license-url]
[![Code Style][code-style-image]][code-style-url]

Redux middleware, actions, and reducers for [Grout](https://github.com/kypertech/grout).

## Documentation

### Middleware

```javascript
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers'; // Combined reducers
import thunkMiddleware from 'redux-thunk';
import { createMiddleware } from 'redux-grout';

let groutMiddleware = createMiddleware();
const createStoreWithMiddleware = compose(
  // Save for redux middleware
  applyMiddleware(thunkMiddleware, groutMiddleware)
)(createStore);
```

### Reducers

Add reducers to combineReducers function:

```javascript
import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { Reducers } from 'redux-grout';
const { account, files, entities} = Reducers;
const rootReducer = combineReducers({
  account,
  files,
  entities,
  router: routerStateReducer
});

export default rootReducer;
```
### Actions

Example of using Actions from `redux-grout` in a smart component:

```javascript
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'redux-grout';

class Main extends Component {
  constructor(props) {
    super(props);
    this.onLoginClick = this.onLoginClick.bind(this);
  }
  onLoginClick(e) {
    e.preventDefault();
    let testLogin = {username: 'test', password: 'asdfasdf'};
    this.props.login(testLogin);
  }
  render() {
    return (
      <div className="App">
        <button onClick={ this.onLoginClick }>Login</button>
      </div>
    )
  }
}
//Place state of redux store into props of component
function mapStateToProps(state) {
  return {
    account: state.account
  };
}
//Place action methods into props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

```

[npm-image]: https://img.shields.io/npm/v/redux-grout.svg?style=flat-square
[npm-url]: https://npmjs.org/package/redux-grout
[npm-downloads-image]: https://img.shields.io/npm/dm/redux-grout.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/KyperTech/redux-grout/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/KyperTech/redux-grout
[daviddm-image]: https://img.shields.io/david/KyperTech/redux-grout.svg?style=flat-square
[daviddm-url]: https://david-dm.org/KyperTech/redux-grout
[climate-image]: https://img.shields.io/codeclimate/github/KyperTech/redux-grout.svg?style=flat-square
[climate-url]: https://codeclimate.com/github/KyperTech/redux-grout
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/KyperTech/redux-grout.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/KyperTech/redux-grout
[license-image]: https://img.shields.io/npm/l/redux-grout.svg?style=flat-square
[license-url]: https://github.com/KyperTech/redux-grout/blob/master/LICENSE
[code-style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[code-style-url]: http://standardjs.com/
