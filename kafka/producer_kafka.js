"use strict"

// var 
    // L               = require('./logger.js'),
    // CONFIG          = require('./CONFIG.js');

var kafka = require('kafka-node')

var 
    HighLevelProducer = kafka.HighLevelProducer,
    HighLevelConsumer = kafka.HighLevelConsumer,
    client = new kafka.Client();
    


var kfk = function(opts){
    // var self = this;

    // self.config = JSON.parse(JSON.stringify(CONFIG));

    // if(opts !== undefined && opts) {
    //     var tOpts = JSON.parse(JSON.stringify(opts));

    //     Object.keys(opts).forEach(function(k){
    //         self.config[k] = tOpts[k];
    //     });
    // }
};



//publisher---
//also include the options for ack, partitioningtype
kfk.prototype.createPublisher = function(topics,message, otherKeys){
    var 
        HighLevelProducer = kafka.HighLevelProducer,
        producer = new HighLevelProducer(client),

        payloads = [
            {
                topic: topics,
                messages: message,
                key: 'theKey', // string or buffer, only needed when using keyed partitioner
                partition: 0, // default 0
                attributes: 2, // default: 0
                timestamp: Date.now()
            }
        ];
    producer.on('ready', function () {
        producer.send(payloads, function (err, data) {
            // output = data;
            console.log(data);
        });
    });
};

kfk.prototype.createTopics = function(topic_names){
    console.log("inside createTopics", topic_names);
    var 
        HighLevelProducer = kafka.HighLevelProducer,

        client = new kafka.Client();
        // console.log("client==========",client);
        // console.log("HighLevelProducer==========",  HighLevelProducer);

    var producer = new HighLevelProducer(client);

    producer.on('ready', function () {
        producer.createTopics(topic_names, false, function (err, data) {
            if(err)
                console.log('Error in creating the topics ::', topic_names);
            else
                console.log(data);
        });
    });
    
};


module.exports = new kfk();