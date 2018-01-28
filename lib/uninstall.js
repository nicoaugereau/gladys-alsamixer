const Promise = require('bluebird');
var sentences = require('./sentences.js');
var answers = require('./answers.js');

module.exports = function uninstall(){

	return gladys.utils.sql('select language from user where role=\'admin\' order by id').then(function(lang){
		if(lang[0].language!='fr-FR')
			return gladys.utils.sql('DELETE FROM sentence WHERE uuid in (?,?)', [sentences.sentenceSpeakerUPEn.sentences[0].uuid, sentences.sentenceSpeakerDOWNEn.sentences[0].uuid, sentences.sentenceMicUPEn.sentences[0].uuid, sentences.sentenceMicDOWNEn.sentences[0].uuid]);
			return gladys.utils.sql('DELETE FROM answer WHERE uuid in (?,?)', [answers.answerSpeakerUPEn.answers[0].uuid, answers.answerSpeakerDOWNEn.answers[0].uuid, answers.answerMicUPEn.answers[0].uuid, answers.answerMicDOWNEn.answers[0].uuid])
		else return gladys.utils.sql('DELETE FROM sentence WHERE uuid in (?,?)', [sentences.sentenceSpeakerUPFr.sentences[0].uuid, sentences.sentenceSpeakerDOWNfr.sentences[0].uuid, sentences.sentenceMicUPFr.sentences[0].uuid, sentences.sentenceMicDOWNFr.sentences[0].uuid]);
			return gladys.utils.sql('DELETE FROM answer WHERE uuid in (?,?)', [answers.answerSpeakerUPFr.answers[0].uuid, answers.answerSpeakerDOWNFr.answers[0].uuid, answers.answerMicUPFr.answers[0].uuid, answers.answerMicDOWNFr.answers[0].uuid])
	});
	
};
