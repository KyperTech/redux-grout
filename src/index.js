import Middleware from './middleware'
import GroutInstance from './grout'
let grout

export * as Reducers from './reducers'
export * as Actions from './actions'

export function createMiddleware(groutName, groutOptions) {
  // Create singleton instance of grout using provided project name and options
  grout = new GroutInstance(groutName, groutOptions)
  // Return middleware (which imports the new grout instance)
  return Middleware
}

// Export grout instance
export function getGrout() {
  return grout
}
// Create new grout instance
export function createGrout(groutName, groutOptions) {
  return grout = new GroutInstance(groutName, groutOptions)
}
