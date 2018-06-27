var exec = require('child_process').exec;
const shared = require('./shared.js')

module.exports = function speakerPercent(PERCENT){

    return gladys.param.getValue(shared.gladysSpeakerName) 
    .then((cmd) => {
	    exec(`amixer set ${cmd} ${PERCENT}%`, function(error, stdout, stderr) {
	            console.log(stdout)
	            console.log(stderr)
	            if (error !== null) {
			               return Promise.reject(error)
			            }
	            return Promise.resolve()
	        });
    })

}