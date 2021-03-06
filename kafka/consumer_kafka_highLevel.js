"use strict"

var kafka = require('kafka-node'),
    HighLevelConsumer = kafka.HighLevelConsumer,
    client = new kafka.Client(),
    consumer = new HighLevelConsumer(
        client,
        [
            { topic: 't' }, { topic: 't1' }
        ],
        {
            groupId: 'my-group'
        }
    );
    const ConsumerGroupStream = require('./lib/consumerGroupStream');
    const resultProducer = new ProducerStream();
    
var options = {
    host: 'zookeeper:2181',  // zookeeper host omit if connecting directly to broker (see kafkaHost below)
    kafkaHost: 'broker:9092', // connect directly to kafka broker (instantiates a KafkaClient)
    zk : undefined,   // put client zk settings if you need them (see Client)
    batch: undefined, // put client batch settings if you need them (see Client)
    ssl: true, // optional (defaults to false) or tls options hash
    groupId: 'ExampleTestGroup',
    sessionTimeout: 15000,
    // An array of partition assignment protocols ordered by preference.
    // 'roundrobin' or 'range' string for built ins (see below to pass in custom assignment protocol)
    protocol: ['roundrobin'],
   
    // Offsets to use for new groups other options could be 'earliest' or 'none' (none will emit an error if no offsets were saved)
    // equivalent to Java client's auto.offset.reset
    fromOffset: 'latest', // default
    commitOffsetsOnFirstJoin: true, // on the very first time this consumer group subscribes to a topic, record the offset returned in fromOffset (latest/earliest)
    // how to recover from OutOfRangeOffset error (where save offset is past server retention) accepts same value as fromOffset
    outOfRangeOffset: 'earliest', // default
    migrateHLC: false,    // for details please see Migration section below
    migrateRolling: true,
    // Callback to allow consumers with autoCommit false a chance to commit before a rebalance finishes
    // isAlreadyMember will be false on the first connection, and true on rebalances triggered after that
    onRebalance: (isAlreadyMember, callback) => { callback(); } // or null
};

var consumerGroup = new ConsumerGroup(options, ['RebalanceTopic', 'RebalanceTest']);

var consumerGroup = new ConsumerGroup(options, 'RebalanceTopic');
