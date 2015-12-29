/** Grout Singleton
 */

import Grout from 'kyper-grout';

//Default configuration options
let defaultOptions = {
	logLevel: 'trace'
};

let instance = null;
class GroutInstance {
	constructor(appName, appOptions) {
		let name = appName ? appName : 'tessellate';
		let options = appOptions ? appOptions : defaultOptions;
		if (!instance) {
      instance = new Grout(appName, options);
    }
		return instance;
	}
}

//Create singleton instance of Grout using project name
export default GroutInstance;
