var speakerUp = require('./speakerUp.js');
var speakerDown = require('./speakerDown.js');
var micUp = require('./micUp.js');
var micDown = require('./micDown.js');

module.exports = function command(scope) {

    switch(scope.label) {
        case 'speaker-up':
            speakerUp();
        break;
    
        case 'speaker-down':
            speakerDown();
        break;
    
        case 'mic-up':
            micUp();
        break;
            
        case 'mic-down':
            micDown();
        break;
    
        default:

        break;
    }
};