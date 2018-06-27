var exec = require('child_process').exec;
const shared = require('./shared.js')

module.exports = function micLevel(){

    // get volume
    // amixer get Master | awk '$0~/%/{print $4}' | tr -d '[]%'
    // amixer get Headset |grep % |awk '{print $4}'|sed -e 's/\[//' -e 's/\]//'
    return gladys.param.getValue(shared.gladysMicrophoneName) 
    .then((cmd) => {
        // return PERCENT = exec('amixer get ' + gladysMicrophoneName + ' | awk \'$0~/%/{print $4}\' | tr -d \'[]%\'');
	    return PERCENT = exec('amixer get '+ cmd + ' | awk \'$0~/%/{print $4}\' | tr -d \'[]%\'', function(error, stdout, stderr) {
	            console.log(stdout)
	            console.log(stderr)
	            if (error !== null) {
			               return Promise.reject(error)
			            }
	            return Promise.resolve()
	        });
    })

}