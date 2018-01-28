var install = require('./lib/install.js');
var uninstall = require('./lib/uninstall.js');
var exec = require('./lib/exec.js');

module.exports = function(sails) {

	gladys.on('ready', function(){
        install();
    });

	return {
		install: install,
		uninstall: uninstall,
		exec: exec
	};
};
