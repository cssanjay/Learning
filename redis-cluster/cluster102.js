var RedisCluster = require('redis-cluster');
var assert = require('assert');
 
var cluster = [
  {name: 'redis01', link: '127.0.0.1:7000', slots: [   0, 5462], options: {max_attempts: 5}},
  {name: 'redis02', link: '127.0.0.1:7001', slots: [5463, 12742], options: {max_attempts: 5}},
  {name: 'redis03', link: '127.0.0.1:7002', slots: [12743, 16384], options: {max_attempts: 5}}
];
 
var r = RedisCluster.poorMansClusterClient(cluster);
 
r.set('foo', 'bar', function (err, reply) {
  if (err) throw err;
  assert.equal(reply,'OK');
 
  r.get('foo', function (err, reply) {
    if (err) throw err;
    assert.equal(reply, 'bar');
  });
});