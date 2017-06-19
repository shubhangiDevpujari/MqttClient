var mqtt = require('mqtt')
 
client = mqtt.connect(
		{ port:1890,
		host:'localhost'});
 
client.subscribe('presence');
 
console.log('Client publishing.. ');
client.publish('presence', 'Client 1 is alive.. Test Ping! ' + Date());
 
client.end();
