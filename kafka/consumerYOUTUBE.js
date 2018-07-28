const kafka = require('kafka-node');

const client = kafka.Client();

const topics = [
    {
        topic : "logged-in-user",
        offset: 0
    }
];

const options = {
    autoCommmit : true
};

const consumer = new kafka.HighLevelConsumer(client, topics, options);

consumer.on('message', (message) => {
    console.log(message);
});

