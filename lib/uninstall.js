const Promise = require('bluebird');
var sentences = require('./sentences.js');

module.exports = function uninstall(){

	return gladys.utils.sql('select language from user where role=\'admin\' order by id').then(function(lang){
		if(lang[0].language!='fr-FR')
			return gladys.utils.sql('DELETE FROM sentence WHERE uuid in (?,?,?,?)', [sentences.sentenceSpeakerUPEn.sentences[0].uuid, sentences.sentenceSpeakerDOWNEn.sentences[0].uuid, sentences.sentenceMicUPEn.sentences[0].uuid, sentences.sentenceMicDOWNEn.sentences[0].uuid]);
		else
			return gladys.utils.sql('DELETE FROM sentence WHERE uuid in (?,?,?,?)', [sentences.sentenceSpeakerUPFr.sentences[0].uuid, sentences.sentenceSpeakerDOWNFr.sentences[0].uuid, sentences.sentenceMicUPFr.sentences[0].uuid, sentences.sentenceMicDOWNFr.sentences[0].uuid]);
	});
	
};
