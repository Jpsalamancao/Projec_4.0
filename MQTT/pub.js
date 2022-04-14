// MQTT publisher
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://192.168.5.59:1883')
var topic = 'Entrada/01'
var message = 'Hola HTTP'

client.on('connect', ()=>{
    setInterval(()=>{
        client.publish(topic, message)
        console.log('Message sent!', message)
    }, 5000)
})