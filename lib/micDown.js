var exec = require('child_process').exec;
const shared = require('./shared.js')

module.exports = function micDown(){

    return gladys.param.getValue(shared.gladysMicrophoneName) 
    .then((cmd) => {
	    exec('amixer set '+ cmd + ' 5%-', function(error, stdout, stderr) {
	            console.log(stdout)
	            console.log(stderr)
	            if (error !== null) {
			               return Promise.reject(error)
			            }
	            return Promise.resolve()
	        });
    })

}