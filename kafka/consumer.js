var kafka = require('kafka-node'),
    HighLevelConsumer = kafka.HighLevelConsumer,
    client = new kafka.Client(),
    consumer = new HighLevelConsumer(
        client,
        [
            { topic: 'topic1' , partition: 1}, { topic: 'topic2' }
        ],
        {
            groupId: 'my-group'
        }
    );

consumer.on('message', function (message) {
    console.log(message);
});