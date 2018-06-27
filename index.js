var install = require('./lib/install.js');
var uninstall = require('./lib/uninstall.js');
var command = require('./lib/alsamixer.command.js');
var speakerUp = require('./lib/speakerUp.js');
var speakerDown = require('./lib/speakerDown.js');
var speakerPercent = require('./lib/speakerPercent.js');
var speakerLevel = require('./lib/speakerLevel.js');
var micUp = require('./lib/micUp.js');
var micDown = require('./lib/micDown.js');
var micPercent = require('./lib/micPercent.js');
var micLevel = require('./lib/micLevel.js');
var micMute = require('./lib/micMute.js');
var exec = require('./lib/exec.js');

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
		speakerPercent: speakerPercent,
		speakerLevel: speakerLevel,
		micUp: micUp,
		micDown: micDown,
		micPercent: micPercent,
		micLevel: micLevel,
		micMute:micMute,
		exec:exec
	};
};
