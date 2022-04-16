const mosca = require('mosca');
const http = require('https');
const mqtt = require('mqtt');

//Configuracion MQTT
const hostMQTT = 'mqtt://192.168.5.59:1883';
const topic = 'temperature';
const settings = {port: 1883}
const broker = new mosca.Server(settings)

//Configuracion HTTP
const hostHTTP = '192.168.5.59';
const portHTTP = 3000;
//Conexion a la API https://4trz3v4f7f.execute-api.us-east-1.amazonaws.com/productive/handlerdata/recordsprocess
const options = {
    hostname: '4trz3v4f7f.execute-api.us-east-1.amazonaws.com', //'192.168.5.59',
    port: 443, //3008,
    path: '/productive/handlerdata/recordsprocess', //'/api/users',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}

// MQTT broker
broker.on('ready', ()=>{
    console.log('Broker funcionando en', hostMQTT);
})

broker.on('published', (packet)=>{
    message = packet.payload.toString();
    console.clear();
    console.log('MQTT: Mensaje', message, ',topic', topic);
})

//HTTP server
const server = http.createServer((req, res) => {
    // console.log('Se ha accedido desde el navegador');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola mundo')
})

server.listen(portHTTP, hostHTTP, () => {
    console.log('Servidor funcionando en', hostHTTP, portHTTP);

    const client = mqtt.connect(hostMQTT);

    client.on('message', (topic, message) => {
        data = JSON.stringify(JSON.parse(message.toString()))
        
        req = http.request(options, res => {
            console.log(`\nStatus: ${res.statusCode} ${res.statusMessage}\n`)
             
            res.on('data', d => {
                process.stdout.write(d)
            })
        })
          
        req.on('error', error => {
        console.error(error)
        })
        
        req.write(data)
        req.end()
        return data;
    })

    client.on('connect', ()=>{
        client.subscribe(topic);
    })
})