var install = require('./lib/install.js');
var uninstall = require('./lib/uninstall.js');
var command = require('./lib/alsamixer.command.js');

module.exports = function(sails) {

	gladys.on('ready', function(){
        install();
    });

	return {
		install: install,
		uninstall: uninstall,
		command: command
	};
};
