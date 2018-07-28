var kafka_producer = require('./producer_kafka')
var kafka_consumer = require('./consumer_kafka')


console.log('Publisher started');
// kafka_producer.createPublisher('check001', 'hi');

kafka_producer.createPublisher('airtel', '9453453476');
kafka_producer.createPublisher('voda', '453476');

//  kafka_producer.createPublisher('t1', '9453453476', {key: 'theKey',partition: 0, attributes: 2,timestamp: Date.now()});
// kafka_producer.createPublisher('t2', '453476');
// // setTimeout(kafka_producer.createTopics('sanjay'),5000);
// kafka_producer.createTopics(['sanjaysinghchauhan']);
// // console.log(kafka_producer.showAllTopics);


console.log('Consumer started');
// kafka_consumer.createSubscriber('check001','my-group');

// kafka_consumer.createSubscriber(['airtel',,'my-group');
// kafka_consumer.createSubscriber('vodafone','my-group');

kafka_consumer.createSubscriber(['airtel', 'voda'],'m2132y-group');
// kafka_consumer.createSubscriber(['t1', 't2'],'group');




console.log('it\'s done');