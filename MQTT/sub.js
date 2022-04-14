// MQTT subscriber
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://192.168.5.59:1883')
var topic = 'Salida/01'

client.on('message', (topic, message)=>{
    message = message.toString()
    console.log(message)
})

client.on('connect', ()=>{
    client.subscribe(topic)
})