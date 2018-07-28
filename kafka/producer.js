topic_name1 = 'topic1'
topic_name2 = 'topic2'

message1 = 'hi'
message2 = ['hello', 'world']


var kafka = require('kafka-node'),
    HighLevelProducer = kafka.HighLevelProducer,
    client = new kafka.Client(),
    producer = new HighLevelProducer(client),
    payloads = [
        { topic: topic_name1, messages: message1 },
        { topic: topic_name2, messages: message2 }
    ];
producer.on('ready', function () {
    producer.send(payloads, function (err, data) {
        console.log(data);
    });
});



