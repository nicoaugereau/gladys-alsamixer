const Promise = require('bluebird');
var sentences = require('./sentences.js');
var answers = require('./answers.js');

module.exports = function install(){

		return gladys.utils.sql('select language from user where role=\'admin\' order by id').then(function(lang){
			if(lang[0].language!='fr-FR'){
				return gladys.sentence.insertBatch([sentences.sentenceSpeakerUPEn, sentences.sentenceSpeakerDOWNEn, sentences.sentenceMicUPEn, sentences.sentenceMicDOWNEn]);
				return gladys.answer.insertBatch([answers.answerSpeakerUPEn, answers.answerSpeakerDOWNEn, answers.answerMicUPEn, answers.answerMicDOWNEn]);
			}else{ return gladys.sentence.insertBatch([sentences.sentenceSpeakerUPFr, sentences.sentenceSpeakerDOWNFr, sentences.sentenceMicUPFr, sentences.sentenceMicDOWNFr]);
				return gladys.answer.insertBatch([answers.answerSpeakerUPFr, answers.answerSpeakerDOWNFr, answers.answerMicUPFr, answers.answerMicDOWNFr]);
			}
		});

	sails.log.info('Commands : Module installed');
};
