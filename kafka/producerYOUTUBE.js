const kafka = require('kafka-node');

const client = new kafka.Client();

const producer = new kafka.HighLevelProducer(client);

producer.on("ready", function() {
    console.log("Kafka producer is connected and ready");
});

producer.on("error", function(error){
    console.log("ERROR::    ",error);
});

const payloads = [
    {
        topic: "logged-in-user",
        messsage: {
            "userId" : 1
        },
        partition: 0
    }
];

producer.send(payloads, (err,data)=>{
    if(err) console.log("error in sending to producer", error);
    console.log(data);
});


