const Promise = require('bluebird');
var speakerUp = require('./speakerUp.js');
var speakerDown = require('./speakerDown.js');
var speakerPercent = require('./speakerPercent.js');
var speakerLevel = require('./speakerLevel.js');
var micUp = require('./micUp.js');
var micDown = require('./micDown.js');
var micPercent = require('./micPercent.js');
var micLevel = require('./micLevel.js');
var micMute = require('./micMute.js');

module.exports = function command(scope) {

    var calledFunc;

    var response = {
        label: ''
    };
	
    switch(scope.label) {
        case 'speaker-up':
            response.label = 'speaker-up';
            calledFunc = speakerUp();
            return response;
        break;
    
        case 'speaker-down':
            response.label = 'speaker-down';
            calledFunc = speakerDown();
            return response;
        break;
            
        case 'speaker-percent':
            response.label = 'speaker-percent';
            calledFunc = speakerPercent(PERCENT);
            return response;
        break;
    
        case 'mic-up':
            response.label = 'mic-up';
            calledFunc = micUp();
            return response;
        break;
            
        case 'mic-down':
            response.label = 'mic-down';
            calledFunc = micDown();
            return response;
        break;

        case 'mic-percent':
            response.label = 'mic-percent';
            calledFunc = micPercent(PERCENT);
            return response;
        break;

        case 'speaker-level':
            response.label = 'speaker-level';
            calledFunc = speakerLevel();
            return response;
        break;

        case 'mic-level':
            response.label = 'mic-level';
            calledFunc = micLevel();
            return response;
        break;

        case 'mic-Mute':
            response.label = 'mic-Mute';
            PERCENT = 0
            calledFunc = micMute(PERCENT);
            return response;
        break;
    
        default:
            sails.log.error('Alsamixer: No command detected !')
            break;

    }
    return Promise.resolve(true);
};