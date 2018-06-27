var speakerPercent = require('./speakerPercent.js');
var micPercent = require('./micPercent.js');
var micMute = require('./micMute.js');

module.exports = function exec(params){
	var PERCENT = params.state.value;

		switch(params.deviceType.type){
			case 'Speaker':
				speakerPercent(PERCENT)
			break;
			case 'Microphone':
				micPercent(PERCENT)
			break;
			case 'binary':
				if(PERCENT == 1) PERCENT = 50
				micMute(PERCENT);
			break;
		};
	
};
