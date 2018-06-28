const Promise = require('bluebird');
const shared = require('./shared.js');
var sentences = require('./sentences.js');
var answers = require('./answers.js');

function insertAnswers(answers){
	return Promise.map(answers, function(answer) {

		// add infos to each response 
		return Promise.map(answer.responses, function(response) {

			response.language = answer.language;
			response.label = answer.label;
			response.needAnswer = answer.needAnswer;

			// and create answer in DB
			return gladys.answer.create(response);
		});
	});
}

function createDevice(){
	var device = {
		device: {
			name: 'Alsamixer',
			identifier: 'alsamixer',
			protocol: 'alsamixer',
			service: 'alsamixer'
		},
		types: [
			{
				name: "Speaker",
				identifier: "alsaSpeaker",
				type: 'Speaker',
				min: 0,
				max: 100,
				sensor: false
			},
			{
				name: "Microphone",
				identifier: "alsaMic",
				type: 'Microphone',
				min: 0,
				max: 100,
				sensor: false
			},
			{
				name: "Mic Mute",
				identifier: "alsaMute",
				type: 'binary',
				min: 0,
				max: 1,
				sensor: false
			}
		]   
	};

	gladys.device.create(device)
		.then(function(device){
			sails.log.info('Alsamixer: Device created !')
			return Promise.resolve()
		})
		.catch(function(err){
			sails.log.info(`Alsamixer: Error when creating device : ${err}`)
			return Promise.reject()
		});
}

function createParam(param){
   
   return gladys.param.setValue(param)
        .then(() => {
			sails.log.info('Alsamixer: Param iserted !')
            return Promise.resolve();
        })
        .catch((err) => {
            sails.log.error(`Alsamixer: Error when inserting param: ${err}`)
            return Promise.reject()
		})
}


module.exports = function install(){
	
	return gladys.utils.sql('select language from user where role=\'admin\' order by id')
		.then(function(lang){
			if(lang[0].language!='fr-FR')
				return gladys.sentence.insertBatch([sentences.sentenceSpeakerUPEn, sentences.sentenceSpeakerDOWNEn, sentences.sentenceMicUPEn, sentences.sentenceMicDOWNEn, sentences.sentenceSpeakerPercentEn, sentences.sentenceMicPercentEn, sentences.sentenceSpeakerLevelEn, sentences.sentenceMicLevelEn, sentences.sentenceMicMuteEn])
				.then(() => insertAnswers([answers.answerSpeakerUPEn, answers.answerSpeakerDOWNEn, answers.answerMicUPEn, answers.answerMicDOWNEn, answers.answerSpeakerPercentEn, answers.answerMicPercentEn, answers.answerSpeakerLevelEn, answers.answerMicLevelEn, answers.answerMicMuteEn]));
			else
				return gladys.sentence.insertBatch([sentences.sentenceSpeakerUPFr, sentences.sentenceSpeakerDOWNFr, sentences.sentenceMicUPFr, sentences.sentenceMicDOWNFr, sentences.sentenceSpeakerPercentFr, sentences.sentenceMicPercentFr, sentences.sentenceSpeakerLevelFr, sentences.sentenceMicLevelFr, sentences.sentenceMicMuteFr])
				.then(() => insertAnswers([answers.answerSpeakerUPFr, answers.answerSpeakerDOWNFr, answers.answerMicUPFr, answers.answerMicDOWNFr, answers.answerSpeakerPercentFr, answers.answerMicPercentFr, answers.answerSpeakerLevelFr, answers.answerMicLevelFr, answers.answerMicMuteFr]));
		})
		.then(() => {
			createDevice()
		})
		.then(() => {
			gladys.param.getValue(shared.gladysSpeakerName)	
			.then(() => {
				console.log('Parameter exists: ' + shared.gladysSpeakerName + '. Doing nothing.')
			})
			.catch(() =>{
			var param = {
				name: shared.gladysSpeakerName,
				value: shared.gladysSpeakerValue,
		    }
			createParam(param)
			})
		})
		.then(() => {
			gladys.param.getValue(shared.gladysMicrophoneName)
			.then(() => {
				console.log('Parametre exists: '+ shared.gladysMicrophoneName + '. Doing nothing.' )
			})
			.catch(() => {
			var param = {
				name: shared.gladysMicrophoneName,
				value: shared.gladysMicrophoneValue,
		    }
			createParam(param)
			})
		})
		.then(() => {
			sails.log.info('Alsamixer: Module installed with success !')
			return Promise.resolve()
		})

};
