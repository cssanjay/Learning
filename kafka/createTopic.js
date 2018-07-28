var kafka = require('kafka-node'),
    HighLevelProducer = kafka.HighLevelProducer,
    client = new kafka.Client(),
    producer = new HighLevelProducer(client),
    payloads = [
        { topic: 'topic__1', messages: 'this is the first topic' },
        { topic: 'topic__2', messages: ['hello', 'world'] }
    ];


// producer.on('ready', function () {
//     producer.send(payloads, function (err, data) {
//     	if(err) console.log("ERROR: 	", err);
//         console.log(data);
//     });
// });

var ready = false;


producer.on('ready', function () {
    producer.createTopics(['createdTopic'], function (err, data) {
        console.log('sanjay');
    });
});

