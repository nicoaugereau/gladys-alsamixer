const Promise = require('bluebird');
var exec = require('child_process').exec;

// 5%+ speaker volume up
module.exports = function speakerUP(){
		
		exec('amixer set PCM 5%+', function(error, stdout, stderr) {
            console.log('stdout: ', stdout);
            console.log('stderr: ', stderr);
            if (error !== null) {
                console.log('exec error: ', error);
            }
        });
    }
// %5- speaker volume down
module.exports = function speakerDOWN(){
		
    exec('amixer set PCM 5%-', function(error, stdout, stderr) {
        console.log('stdout: ', stdout);
        console.log('stderr: ', stderr);
        if (error !== null) {
            console.log('exec error: ', error);
        }
    });
}
// speaker %percent sent by user
module.exports = function speaker(){
		
    exec('amixer set PCM %percent%%', function(error, stdout, stderr) {
        console.log('stdout: ', stdout);
        console.log('stderr: ', stderr);
        if (error !== null) {
            console.log('exec error: ', error);
        }
    });
}
// 5%+ mic volume up
module.exports = function micUP(){
		
    exec('amixer set Headset 5%-', function(error, stdout, stderr) {
        console.log('stdout: ', stdout);
        console.log('stderr: ', stderr);
        if (error !== null) {
            console.log('exec error: ', error);
        }
    });
}
// 5%- mic volume down
module.exports = function micDOWN(){
		
    exec('amixer set PCM 5%-', function(error, stdout, stderr) {
        console.log('stdout: ', stdout);
        console.log('stderr: ', stderr);
        if (error !== null) {
            console.log('exec error: ', error);
        }
    });
}
// mic %percent sent by user
module.exports = function mic(){
		
    exec('amixer set Headset %percent%%', function(error, stdout, stderr) {
        console.log('stdout: ', stdout);
        console.log('stderr: ', stderr);
        if (error !== null) {
            console.log('exec error: ', error);
        }
    });
}

module.exports = function exec(scope) {
	
    switch(scope.label) {
        case 'speaker-up':
            speakerUP();
        break;
    
        case 'speaker-down':
            speakerDOWN();
        break;
            
        case 'restart':
            speaker();
        break;
    
        case 'mic-up':
            micUP();
        break;
            
        case 'mic-down':
            micDOWN();
        break;

        case 'restartVoice':
            mic();
        break;
    
        default:

        break;
    }
};