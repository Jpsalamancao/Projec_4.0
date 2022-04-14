const http = require('http');
const fs = require('fs');
const mqtt = require('mqtt');

const host = 'localhost';
const port = 3000;
const topic = 'Salida/01';
const serverMQTT = 'mqtt://192.168.5.59:1883'

const server = http.createServer((req, res) => {
    
    //MQTT
    const client = mqtt.connect(serverMQTT)
    client.on('message', (topic, message) => {
        message = message.toString()
        console.log(message)
        //document.getElementById('mensaje').innerHTML = message;
        //alert(message)
    })
    client.on('connect', ()=>{
        client.subscribe(topic)
    })

    //HTML
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('src/index.html', (error, data) => {
        if(error){
            res.writeHead(404);
            res.write("Archivo no encontrado");
        } else {
            res.write(data);
        }
        res.end()
    })
})

server.listen(port, host, () => {
    console.log('Servidor funcionando en ', host, port)
})