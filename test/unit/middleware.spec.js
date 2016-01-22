import chai from 'chai';
import groutMiddleware from '../../src/middleware';

describe('grout middleware', () => {
  const doDispatch = () => {};
  const doGetState = () => {};
  const nextHandler = groutMiddleware({dispatch: doDispatch, getState: doGetState});
  it('must return a function to handle next', () => {
    chai.assert.isFunction(nextHandler);
    chai.assert.strictEqual(nextHandler.length, 1);
  });
  describe('handle errors', () => {
    it('must throw if argument is non-object', done => {
      try {
        matterMiddleware();
      } catch(err) {
        done();
      }
    });
  });
});
