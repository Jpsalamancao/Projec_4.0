const http = require('http');
const fs = require('fs');

const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', (error, data) => {
        if(error){
            res.writeHead(404);
            res.write("Archivo no encontrado");
        } else {
            res.write(data);
        }
        res.end()
    })
    // MQTT subscriber
    var mqtt = require('mqtt')
    var client = mqtt.connect('mqtt://192.168.5.59:1883')
    var topic = 'Entrada/01'

    client.on('message', (topic, message)=>{
        message = message.toString()
        console.log(message)
    })

    client.on('connect', ()=>{
        client.subscribe(topic)
    })
})

server.listen(port, host, () => {
    console.log('Servidor funcionando en ', host, port)
})