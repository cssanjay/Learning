'use strict';

var kafka = require('kafka-node');

var client = new kafka.Client();

const producer = new kafka.HighLevelProducer(client);


class Kafka {

    constructor(){
        console.log('constructor');
    }

    //connect
    connect(){
        producer.on("ready", function() {
            console.log("Kafka producer is connected and ready");
        });
    }

    //producer
    producer(data){

        const sentMessage = JSON.stringify(data.message);

        var payloads = [
            { topic: data.topic, messages:sentMessage, partition: data.partition} 
        ];

        producer.send(payloads, (err,data)=>{
            console.log(data);
            if(err) console.log('Topic not present',err);
        });
    }

    //createTopic
    createTopic(data){
        var topic = [data.topic];
        console.log(topic);
        producer.on("ready", function() {
            console.log("Kafka producer is connected and ready");
        
            producer.createTopics(topic, false, (err,data)=>{
                if(err) console.log("error creating topic",err);
                console.log(data);
            });
        });
    }

    //consumer
    consumer(body){

        var payload = [{topic : body.topic}],
            groupId = {groupId: body.groupId},
            consumer = new kafka.HighLevelConsumer(client, payload, groupId);
    
        consumer.on('message',(message)=>{
            console.log('MESSAGE:',message);
            
        });
    }

    //readFromOffset
    readFromOffset(body){
        var payload = [
                {
                    topic : body.topic,
                    offset: 2,
                    partition:0
                }
            ],
            groupId = {
                groupId: body.groupId,
                fromOffset: true
            },
            // Consumer = kafka.Consumer,
            // client = new kafka.Client(),
            // //
            // consumer = new Consumer(
            //     client,
            //     [
            //         { topic: body.topic, offset:3, partition: 0 }
            //     ],
            //     {
            //         autoCommit: false,
            //         fromOffset:true
            //     }
            // );
            // consumer.on('message', function (message) {
            //     console.log(message);
            // });


            consumer = new kafka.HighLevelConsumer(client, 
                [
                            { topic: body.topic, offset:3, partition: 0 }
                ]
                ,{
                    groupId: body.groupId,
                    fromOffset: true
                });
            // consumer.setOffset(body.topic, 0, 0);
        // console.log("PAYLOAD", payload);
        consumer.on('message',(message)=>{
            console.log('MESSAGE:',message);
            
        });
        console.log("PAYLOAD", payload);

    }


}

module.exports = Kafka;
