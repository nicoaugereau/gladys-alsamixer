const Promise = require('bluebird');
const shared = require('./shared.js')
var exec = require('child_process');
var speakerUp = require('./speakerUp.js');
var speakerDown = require('./speakerDown.js');
var speakerPercent = require('./speakerPercent.js');
var micUp = require('./micUp.js');
var micDown = require('./micDown.js');
var micPercent = require('./micPercent.js');
var micMute = require('./micMute.js');

module.exports = function command(scope) {

    var response = {};
	
    switch(scope.label) {
        case 'speaker-up':
            response.label = 'speaker-up';
            speakerUp();
            return response;
        break;
    
        case 'speaker-down':
            response.label = 'speaker-down';
            speakerDown();
            return response;
        break;
            
        case 'speaker-percent':
            response.label = 'speaker-percent';
            speakerPercent(PERCENT);
            return response;
        break;
    
        case 'mic-up':
            response.label = 'mic-up';
            micUp();
            return response;
        break;
            
        case 'mic-down':
            response.label = 'mic-down';
            micDown();
            return response;
        break;

        case 'mic-percent':
            response.label = 'mic-percent';
            micPercent(PERCENT);
            return response;
        break;

        case 'speaker-level':
        return gladys.param.getValue(shared.gladysSpeakerName)
        .then((cmd) => {
            var output = exec.execSync('amixer get ' + cmd + ' | grep -m1 % |awk \'{print $4}\'|sed -e \'s/\\[//\' -e \'s/\\]//\'').toString();
            var response = {
                label: 'speaker-level',
                scope: {
                        '%PERCENT%': output
                }
            }
        return response;
    }) 
        break;

        case 'mic-level':
            return gladys.param.getValue(shared.gladysMicrophoneName)
	        .then((cmd) => {
    		    var output = exec.execSync('amixer get ' + cmd + ' | grep -m1 % |awk \'{print $4}\'|sed -e \'s/\\[//\' -e \'s/\\]//\'').toString();
	            var response = {
	                label: 'mic-level',
	                scope: {
	                        '%PERCENT%': output
	                }
	            }
            return response;
	    })  
        break;

        case 'mic-Mute':
            response.label = 'mic-Mute';
            PERCENT = 0
            micMute(PERCENT);
            return response;
        break;
    
        default:
            sails.log.error('Alsamixer: No command detected !')
            break;

    }
    return Promise.resolve(true);
};