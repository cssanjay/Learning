var kafka = require('kafka-node');


// Producer
var Producer 	= kafka.Producer,
	KeyedMessage= kafka.KeyedMessage,
	client		= new kafka.Client(),
	producer 	= new Producer(client);

	km = new KeyedMessage('key', 'message'),
	payloads = [
		{
			topic: 		'topicName',
			messages: 	'1',
			partition: 	0,
			timestamp: 	Date.now()
		}
	];

// producer.on('ready', function(){
// 	producer.send(payloads, function(err,data){
// 		console.log("data", data);
// 	});
// });

// producer.on('err', function(err){
// 	console.log('Error is produced');
// });

producer.on('ready',function(){
	producer.createTopics(['new_created_topic'],false,function(err,data){
	console.log('Data of createTopics: 	', data);
	});
});
