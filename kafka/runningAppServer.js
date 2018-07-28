const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const kafka = require('kafka-node');

const client = new kafka.Client();

const producer = new kafka.HighLevelProducer(client);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

producer.on("ready", function() {
    console.log("Kafka producer is connected and ready");
});

producer.on("error", function(error){
    console.log("ERROR::    ",error);
});

app.get('/', (req,res)=>
    res.send('You are talking to kafka producer -_-')
)

app.post('/send', (req,res)=>{
    const sentMessage = JSON.stringify(req.body.message);
    payloads = [
        { topic: req.body.topic, messages:sentMessage, partition:0}
    ];
    producer.send(payloads, (err,data)=>{
        res.json(data);
    });
})

app.post('/sent', (req,res)=>{
    topic = [{topic : req.body.topic}];
    groupId = {groupId: req.body.groupId}
    // console.log("Topic is", topic);
    consumer = new kafka.HighLevelConsumer(client, topic, groupId);

    consumer.on('message',(message)=>{
        console.log(message);
        res.json(data);
    });
    res.json(topic);
});

app.post('/create', (req,res)=>{
    topic = [req.body.topic];
    producer.createTopics(topic, false, (err,data)=>{
        if(err) console.log("error creating topic",err);
        res.json(data);
    })
})
app.listen(6969, ()=> console.log('Example app listening on port 6969'))