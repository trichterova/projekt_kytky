client = new Paho.MQTT.Client(
    "d57a0d1c39d54550b147b58411d86743.s2.eu.hivemq.cloud", 
    8884, 
    "3d8cfbf1-3639-4883-bff");

    client.connect({
        onSuccess: onConnect,
        userName: "robot",
        password: "P@ssW0rd!",
        useSSL: true
        });
    
    function onConnect() {
        console.log("onConnect");

       // message = new Paho.MQTT.Message("Ahoj");     
       // message.destinationName = "/row/3/text";       
       // client.send(message);
            
        client.onMessageArrived = onMessageArrived; 
        client.subscribe("/out/plant/humidity"); 
        sendMessage();
        }
        
        function sendMessage() {
            message = new Paho.MQTT.Message("off");     
            message.destinationName = "/in/plant/light";       
            client.send(message);  
        
            } 

        function onMessageArrived(message) {  

            console.log("onMessageArrived:" + message.destinationName);  
            console.log("onMessageArrived:" + message.payloadString); 
        }
        
   
    
   
