var install = require('./lib/install.js');
var uninstall = require('./lib/uninstall.js');
var command = require('./lib/alsamixer.command.js');
var speakerUp = require('./lib/speakerUp.js');
var speakerDown = require('./lib/speakerDown.js');
var micUp = require('./lib/micUp.js');
var micDown = require('./lib/micDown.js');

module.exports = function(sails) {

	gladys.on('ready', function(){
        install();
    });

	return {
		install: install,
		uninstall: uninstall,
		command: command,
		speakerUp: speakerUp,
		speakerDown: speakerDown,
		micUp: micUp,
		micDown: micDown
	};
};
