/** Grout Singleton
 */

import Grout from 'kyper-grout'

// Default configuration options
let defaultOptions = {
  logLevel: 'trace'
}

let instance = null
class GroutInstance {
  constructor (projectName, appOptions) {
    const name = projectName ? projectName : 'tessellate'
    let options = appOptions ? appOptions : defaultOptions
    if (!instance) {
      instance = new Grout(name, options)
    }
    return instance
  }
}

// Create singleton instance of Grout using project name
export default GroutInstance
