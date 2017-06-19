var mqtt = require('mqtt')
 
client = mqtt.connect(
		{port :1890,
		host: 'localhost'});
 
client.subscribe('presence');
 
client.on('message', function(topic, message) {
  console.log(message.toString());
});
 
console.log('Client started...');
