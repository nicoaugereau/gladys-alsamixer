const Promise = require('bluebird');
var sentences = require('./sentences.js');

module.exports = function install(){

	return gladys.utils.sql('select language from user where role=\'admin\' order by id').then(function(lang){
		if(lang[0].language!='fr-FR')
			return gladys.sentence.insertBatch([sentences.sentenceSpeakerUPEn, sentences.sentenceSpeakerDOWNEn, sentences.sentenceMicUPEn, sentences.sentenceMicDOWNEn]);
		else
			return gladys.sentence.insertBatch([sentences.sentenceSpeakerUPFr, sentences.sentenceSpeakerDOWNFr, sentences.sentenceMicUPFr, sentences.sentenceMicDOWNFr]);
	});

	sails.log.info('Commands : Module installed');
};
