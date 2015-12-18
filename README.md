# Redux Grout

[![npm version](https://img.shields.io/npm/v/redux-grout.svg?style=flat-square)](https://www.npmjs.com/package/redux-grout)
[![npm downloads](https://img.shields.io/npm/dm/redux-grout.svg?style=flat-square)](https://www.npmjs.com/package/redux-grout)
[![build status](https://img.shields.io/travis/KyperTech/matter/master.svg?style=flat-square)](https://travis-ci.org/KyperTech/redux-grout)
[![dependencies status](https://img.shields.io/david/KyperTech/redux-grout/master.svg?style=flat-square)](https://david-dm.org/KyperTech/redux-grout)
[![license](https://img.shields.io/npm/l/redux-grout.svg?style=flat-square)](https://github.com/KyperTech/matter/blob/master/LICENSE)

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
const rootReducer = combineReducers({
  account: Reducers.account,
  entities: Reducers.entities,
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
