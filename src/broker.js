const mosca = require('mosca');
const http = require('https');
const mqtt = require('mqtt');
const { connect } = require('http2');

const topicRecord = 'record';
const topicAdd = 'addProduct';
const topicCharger = 'charger';
const topicPerformance = 'performance';
const topicQuality = 'qualityproduct';


const selectTopic = (topic) => {
    switch(topic){
        case topicRecord:
            optionsHTTP.path = '/prueba/handlerdata/recordsprocess';
            break;
        case topicAdd:
            optionsHTTP.path = '/prueba/handlerdata/addproducto';
            break;
        case topicCharger:
            optionsHTTP.path = '/prueba/handlerdata/chargerawmaterial';
            break;
        case topicPerformance:
            optionsHTTP.path = '/prueba/handlerdata/performance';
            break;
        case topicQuality:
            optionsHTTP.path = '/prueba/handlerdata/qualityproduct';
            break;
        default:
            console.log(`\n%c${'El topic es incorrecto'}`)
    }
}

// Servidor MQTT
const hostMQTT = 'mqtt://localhost:1234'; // 'mqtt://192.168.5.221:1234';
const settings = {port: 1234}
const broker = new mosca.Server(settings)

broker.on('published', (packet)=>{
    message = packet.payload.toString();
    topic = packet.topic.toString();

    console.clear();
    console.log(`MQTT:Desde el topic '${topic}', se envia el mensaje\n${message}`);

    selectTopic();
})

const client = mqtt.connect(hostMQTT);

function messageMQTT(){
    client.on('message', (topic, message) => {
        data = JSON.parse(message);
        data.topic = topic;
        
        req = reqHTTP();          
        req.on('error', error => {
            console.error(error)
        })
        req.write(JSON.stringify(data))
        req.end()
    })
}

function connectMQTT(){
    client.on('connect', ()=>{
        client.subscribe(topicRecord);
        client.subscribe(topicAdd);
        client.subscribe(topicCharger);
        client.subscribe(topicPerformance);
        client.subscribe(topicQuality);
    })
}

//Configuracion HTTP
const hostHTTP = 'localhost'; // '192.168.5.221';
const portHTTP = 3000;

const optionsHTTP = {
    hostname: 'keb6atfcl0.execute-api.us-east-1.amazonaws.com',
    port: 443,
    // path: '/prueba/handlerdata/qualityproduct',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola mundo')
})

const reqHTTP = () => {
    return http.request(optionsHTTP, res => {
        console.log(`\nHTTP: Status: ${res.statusCode} ${res.statusMessage}`)
        res.on('data', d => {
            console.log(`\nAWS responde desde ${optionsHTTP.path}`)
            process.stdout.write(d)
        })
    })
}

server.listen(portHTTP, hostHTTP, () => {
    console.log('Servidor funcionando en', hostHTTP, portHTTP);
    messageMQTT();
    connectMQTT();
})







//HTTP server




// const mosca = require('mosca');
// const http = require('https');
// const mqtt = require('mqtt');

// //Configuracion MQTT
// const hostMQTT = 'mqtt://192.168.5.221:1234';
// const settings = {port: 1234}

// topic1 = 'record';
// topic2 = 'addProduct';
// topic3 = 'charger';
// topic4 = 'performance';
// topic5 = 'qualityproduct';

// //Configuracion HTTP
// const hostHTTP = '192.168.5.221';
// const portHTTP = 3000;
// // https://keb6atfcl0.execute-api.us-east-1.amazonaws.com/prueba/handlerdata/recordsprocess
// // https://keb6atfcl0.execute-api.us-east-1.amazonaws.com/prueba/handlerdata/chargerawmaterial
// const optionsHTTP = {
//     hostname: 'keb6atfcl0.execute-api.us-east-1.amazonaws.com', //'192.168.5.59',
//     port: 443, //3008,
//     path: '/prueba/handlerdata/qualityproduct', //'/api/users',
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }

// console.clear()
// const broker = new mosca.Server(settings)

// const client = mqtt.connect(hostMQTT);

// broker.on('published', (packet)=>{
//     message = packet.payload.toString();
//     topic = packet.topic.toString();

//     console.clear();
//     console.log(`MQTT:Desde el topic '${topic}', se envia el mensaje\n${message}`);

//     switch(topic){
//         case topic1:
//             optionsHTTP.path = '/prueba/handlerdata/recordsprocess';
//             break;
//         case topic2:
//             // https://keb6atfcl0.execute-api.us-east-1.amazonaws.com/prueba/handlerdata/addproducto
//             optionsHTTP.path = '/prueba/handlerdata/addproducto';
//             break;
//         case topic3:
//             optionsHTTP.path = '/prueba/handlerdata/chargerawmaterial';
//             break;
//         case topic4:
//             // https://keb6atfcl0.execute-api.us-east-1.amazonaws.com/prueba/handlerdata/performance
//             optionsHTTP.path = '/prueba/handlerdata/performance';
//             break;
//         case topic5:
//             // https://keb6atfcl0.execute-api.us-east-1.amazonaws.com/prueba/handlerdata/qualityproduct
//             optionsHTTP.path = '/prueba/handlerdata/qualityproduct';
//             break;
//         default:
//             console.log(`\n%c${'El topic es incorrecto'}`, `color:${'red'}`)
//     }
// })

// //HTTP server
// const server = http.createServer((req, res) => {
//     // console.log('Se ha accedido desde el navegador');
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hola mundo')
// })

// server.listen(portHTTP, hostHTTP, () => {
//     console.log('Servidor funcionando en', hostHTTP, portHTTP);

//     client.on('message', (topic, message) => {
//         data = JSON.parse(message);
//         data.topic = topic;
//         // console.log(data)
        
//         req = http.request(optionsHTTP, res => {
//             console.log(`\nHTTP: Status: ${res.statusCode} ${res.statusMessage}`)
             
//             res.on('data', d => {
//                 console.log(`\nAWS responde desde ${optionsHTTP.path}`)
//                 process.stdout.write(d)
//             })
//         })
          
//         req.on('error', error => {
//         console.error(error)
//         })
        
//         req.write(JSON.stringify(data))
//         req.end()
//     })

//     client.on('connect', ()=>{
//         client.subscribe(topic1);
//         client.subscribe(topic2);
//         client.subscribe(topic3);
//         client.subscribe(topic4);
//         client.subscribe(topic5);
//     })
// })