/** grout Singleton
 */

import Middleware from './middleware';
import GroutInstance from './grout';

export * as Reducers from './reducers';
export * as Actions from './actions';

export function createMiddleware(groutName, groutOptions) {
  //Create singleton instance of grout using provided project name and options
  grout = new GroutInstance(groutName, groutOptions);
  //Return middleware (which imports the new grout instance)
  return Middleware;
}

let grout;
//Export grout instance
export function getGrout() {
  // if(!grout){
  //   throw Error('You must call createMiddleware before using ');
  // }
  return grout;
}
//Create new grout instance
export function createGrout(groutName, groutOptions) {
  //TODO: Handle being passed a grout instance
  return grout = new GroutInstance(groutName, groutOptions);
}
