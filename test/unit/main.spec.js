import { expect } from 'chai';
import * as ReduxGrout from '../../src';
describe('redux-grout', () => {
  it('defines createMiddleware', () => {
    expect(ReduxGrout).to.have.property('createMiddleware');
  });
  it('defines Actions', () => {
    expect(ReduxGrout).to.have.property('Actions');
  });
  it('defines Reducers', () => {
    expect(ReduxGrout).to.have.property('Reducers');
  });
  it('defines getGrout', () => {
    expect(ReduxGrout).to.have.property('getGrout');
  });
});
