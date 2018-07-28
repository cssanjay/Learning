var redis = require('redis');
var client = new redis.createClient([
  '127.0.0.1:7000',
  '127.0.0.1:7001',
  '127.0.0.1:7002',
  '127.0.0.1:7003',
  '127.0.0.1:7004',
  '127.0.0.1:7005'
]);

// client.auth('password');

client.set('key01', 'value01');
client.get('key01', function(err, val){
    console.log("key01.value :", val);
});


client.set('key02', 'value01');
client.get('key02', function(err, val){
    console.log("key02.value :", val);
});