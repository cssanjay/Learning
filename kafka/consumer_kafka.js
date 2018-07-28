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



//publisher
kfk.prototype.createSubscriber = function(topics,message, group_id){
    var
        // HighLevelConsumer = kafka.HighLevelConsumer,
        // client = new kafka.Client(),
        consumer = new HighLevelConsumer(
            client,
            [
                // { topic: 'check001' }
                { topic: topics[0],
                partition: 0 }

                , { topic: topics[1] }
            ],
            {
                groupId: group_id
            }
        );

    consumer.on('message', function (message) {
        console.log('Inside createSubscriber method of consumer_kafka');

        console.log(message);
    });
};




//add topic

//add offset

//remove topic

//pause,resume

//pauseTopics, resumeTopics

module.exports = new kfk();