var kfk = require('./k')

var Kafka = new kfk();

// app.post('/send', (req,res)=>{
//     const sentMessage = JSON.stringify(req.body.message);
//     payloads = [
//         { topic: req.body.topic, messages:sentMessage, partition:0}
//     ];
//     producer.send(payloads, (err,data)=>{
//         res.json(data);
//     });
// })

// var payloads = [
//     { topic: 'k', messages:'here is the message', partition: 0}
// ];

// var data = { topic: 'k2', message:'here is the message', partition: 0}

// Kafka.producer(data);
// Kafka.createTopic({topic:'topic-created'});

// var consume_data = {topic:'k2', groupId: 'newGroup'};
// Kafka.consumer(consume_data);

var consumer_offset = {
    topic: 'k2', 
    groupId: 'newGroup111',
    offset: 1
};
Kafka.readFromOffset(consumer_offset);

