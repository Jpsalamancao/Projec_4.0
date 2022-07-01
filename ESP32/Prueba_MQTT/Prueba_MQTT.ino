#include <Arduino.h>
#include <ArduinoJson.h>
#include <WiFi.h>
#include <PubSubClient.h>
#include <time.h>
#include <Adafruit_Sensor.h>
#include <DHT.h>
#include <DHT_U.h>

// Variables de la red WiFi 
const char* ssid = "Krloz Medina";
const char* password =  "F@mili@571112";

// Variables del servidor MQTT
const char* mqttServer = "192.168.5.221";
const int mqttPort = 1234;

// Variables del servidor Network Time Protocol
const char* ntpServer = "co.pool.ntp.org";
const long  gmtOffset_sec = -21600;
const int   daylightOffset_sec = 3600;

// Variables locales
int selectTopic = 1;
char* topic;
int sendCorrect = 0;
int sendFail = 0;
char fecha[25];
char id[30];
String lote = "L1020";
int delayToSend = 60000;

// Variables de librerias
struct tm timeinfo;
WiFiClient espClient;
PubSubClient client(espClient);

// Asignacion de puertos
#define DHTPIN 13

// Configuracion de sensores
#define DHTTYPE DHT11
DHT_Unified dht(DHTPIN, DHTTYPE);
 
void setup() {
  //Puerto serial
  Serial.begin(115200);
  Serial.println();
 
  //WIFI
  WiFi.begin(ssid, password);
 
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.println("Connecting to WiFi..");
  }
 
  Serial.println("Connected to the WiFi network");
 
  //Servidor MQTT
  client.setServer(mqttServer, mqttPort);
 
  while (!client.connected()) {
    Serial.println("Connecting to MQTT...");
 
    if (client.connect("")) {
      Serial.println("connected");
    } else {
      Serial.print("failed with state ");
      Serial.print(client.state());
      delay(2000);
    }
  }

  //Servido NTP (Network Time Protocole)
  configTime(gmtOffset_sec, daylightOffset_sec, ntpServer);
  dht.begin();
  sensor_t sensor;
}

void loop() {
  // Obtener la fecha
  if(!getLocalTime(&timeinfo)){
    Serial.println("Failed to obtain time");
    return;
  }
  strftime(fecha, 25, "%d-%B-%Y %H:%M:%S", &timeinfo);
  strftime(id, 30, "%y%j%H%M", &timeinfo);

  // Capturar datos de temperatura y humedad
  sensors_event_t event;
  dht.temperature().getEvent(&event);
  if (isnan(event.temperature)) {
    Serial.println(F("sendFail reading temperature!"));
  }

  dht.humidity().getEvent(&event);
  if (isnan(event.relative_humidity)) {
    Serial.println(F("sendFail reading humidity!"));
  }

  // Creacion del JSON
  StaticJsonBuffer <300> JSONbuffer;
  JsonObject& JSONencoder = JSONbuffer.createObject();

  switch (selectTopic) {
    case 1:
      JSONencoder["id"] = id;
      JSONencoder["temperatura"] = String(event.temperature);
      JSONencoder["time_proceso"] = fecha;
      JSONencoder["Lote"] = lote;
      topic = "record";
      // selectTopic = 2;
      break;
    case 2:
      JSONencoder["id"] = id;
      JSONencoder["add_Materiaprima"] = "Varsol";
      JSONencoder["catidad_kg"] = random(1, 100);
      JSONencoder["time_proceso"] = fecha;
      JSONencoder["Lote_Materiaprima"] = "Var1020";
      JSONencoder["Lote"] = lote;
      topic = "charger";
      // selectTopic = 3;
      break;
    case 3:
      JSONencoder["id"] = id; "l1";
      JSONencoder["add_producto"] = "cobalto";
      JSONencoder["catidad_kg"] = random(0,30);
      JSONencoder["lote_add_producto"] = "L1410";
      JSONencoder["Lote"] = lote;
      topic = "addProduct";
      selectTopic = 4;
      break;
    case 4:
      JSONencoder["id"] = id;
      JSONencoder["producto"] = "Calcio";
      JSONencoder["Rendimiento_kg"] = "l30";
      JSONencoder["time_proceso"] = fecha;
      JSONencoder["Lote"] = lote;
      topic = "performance";
      // selectTopic = 5;
      break;
    case 5:
      JSONencoder["id"] = id;
      JSONencoder["producto"] = "Manganecio";
      JSONencoder["Quality"] = "Concentracion 28%";
      JSONencoder["time_proceso"] = fecha;
      JSONencoder["Lote"] = lote;
      topic = "qualityproduct";
      // selectTopic = 1;
      break;
  }

  char JSONmessageBuffer[300];
  JSONencoder.printTo(JSONmessageBuffer, sizeof(JSONmessageBuffer));
  Serial.println("Sending message to MQTT topic..");
  Serial.println(JSONmessageBuffer);

  // Enviar data al servidor MQTT
  client.connect("");
 
  if (client.publish(topic, JSONmessageBuffer) == true) {
    Serial.println("sendCorrect sending message.");
    sendCorrect++;
  } else {
    Serial.print("sendFail sending message. Failed with state: ");
    Serial.println(client.state());
    sendFail++;
  }

  Serial.print("sendCorrect:");
  Serial.print(sendCorrect);
  Serial.print(" sendFail:");
  Serial.println(sendFail);
 
  Serial.println("------------------------------");
  client.loop();

  delay(delayToSend);
}

//------------------CODIGO VIEJO------------------//

// #include <Arduino.h>
// #include <ArduinoJson.h>
// #include <WiFi.h>
// #include <PubSubClient.h>
// #include <time.h>
// #include <Adafruit_Sensor.h>
// #include <DHT.h>
// #include <DHT_U.h>

// // Conectar a la red WiFi 
// const char* ssid = "Krloz Medina";
// const char* password =  "F@mili@571112";

// // Conectar al servidor MQTT
// const char* mqttServer = "192.168.5.221";
// const int mqttPort = 1234;

// // Conectar al servidor Network Time Protocol
// const char* ntpServer = "co.pool.ntp.org";
// const long  gmtOffset_sec = -21600;
// const int   daylightOffset_sec = 3600;


// int dato = 5;
// char* topic;
// int success = 0;
// int error = 0;
// char fecha[50];
// char id[50];
// struct tm timeinfo;
 
// WiFiClient espClient;
// PubSubClient client(espClient);

// #define DHTPIN 13
// #define DHTTYPE DHT11
// DHT_Unified dht(DHTPIN, DHTTYPE);
 
// void setup() {
//   //Configuracion puerto serial
//   Serial.begin(115200);
//   Serial.println();
 
//   //Configuracion WIFI
//   WiFi.begin(ssid, password);
 
//   while (WiFi.status() != WL_CONNECTED) {
//     delay(500);
//     Serial.println("Connecting to WiFi..");
//   }
 
//   Serial.println("Connected to the WiFi network");
 
//   //Configuracion servidor MQTT
//   client.setServer(mqttServer, mqttPort);
 
//   while (!client.connected()) {
//     Serial.println("Connecting to MQTT...");
 
//     if (client.connect("")) {
//       Serial.println("connected, compilado desde VSCode en MacOS");
//     } else {
//       Serial.print("failed with state ");
//       Serial.print(client.state());
//       delay(2000);
//     }
//   }

//   //Configuracion al servido NTP (Network Time Protocole)
//   configTime(gmtOffset_sec, daylightOffset_sec, ntpServer);

//   dht.begin();
//   Serial.println(F("DHTxx Unified Sensor Example"));
//   sensor_t sensor;
// }
 
// void loop() {
//   //NTP
//   if(!getLocalTime(&timeinfo)){
//     Serial.println("Failed to obtain time");
//     return;
//   }

//   String lote = "L1020";
//   strftime(fecha, 50, "%d-%B-%Y %H:%M:%S", &timeinfo);
//   strftime(id, 50, "%y%j%H%M", &timeinfo);
//   //id = lote-fechaint
  
//   //JSON
//   StaticJsonBuffer <300> JSONbuffer;
//   JsonObject& JSONencoder = JSONbuffer.createObject();

//   // Get temperature event and print its value.
//   sensors_event_t event;
//   dht.temperature().getEvent(&event);
//   /*if (isnan(event.temperature)) {
//     Serial.println(F("Error reading temperature!"));
//   }
//   else {
//     Serial.print(F("Temperature: "));
//     Serial.print(event.temperature);
//     Serial.println(F("°C"));
//   }
//   // Get humidity event and print its value.
//   dht.humidity().getEvent(&event);
//   if (isnan(event.relative_humidity)) {
//     Serial.println(F("Error reading humidity!"));
//   }
//   else {
//     Serial.print(F("Humidity: "));
//     Serial.print(event.relative_humidity);
//     Serial.println(F("%"));
//   }*/

// //   {
// //     "id":"103lok",
// //     "topic":"record",
// //     "temperatura":"27.0",
// //     "time_proceso":"1995-12-17T03:24:00",
// //     "Lote":"L1010jp4"
// // }

//   switch (dato) {
//     case 1:
//       JSONencoder["id"] = id; //221512024
//       JSONencoder["temperatura"] = String(event.temperature);  //random(20, 120);
//       JSONencoder["time_proceso"] = fecha;  //"2022-23-23T16:11:07";
//       JSONencoder["Lote"] = lote;
//       topic = "record";
//       // dato = 2;
//       break;
//     case 2:
// //     {
// //     "id":"l1",
// //     "topic":"charger",
// //     "add_Materiaprima":"calcio",
// //     "catidad_kg":25.0,
// //     "time_proceso":"1995-12-17T03:24:00",
// //     "Lote_Materiaprima":"cal1022",
// //     "Lote":"L1010"
// // }
//       JSONencoder["id"] = id; //"l1";
//       JSONencoder["topic"] = "charger";
//       JSONencoder["add_Materiaprima"] = "Varsol";
//       JSONencoder["catidad_kg"] = random(1, 100);
//       JSONencoder["time_proceso"] = fecha;  //"2022-23-23T16:11:07";
//       JSONencoder["Lote_Materiaprima"] = "Var1020";
//       JSONencoder["Lote"] = lote;
//       topic = "charger";
//       // dato = 3;
//       break;
//     case 3:
// //     {
// //     "id":"l1",
// //     "topic":"addProduct",
// //     "add_producto":"calcio",
// //     "catidad_kg":25.0,
// //     "lote_add_producto":"l3025",
// //     "Lote":"L1010"
// // }
//       JSONencoder["id"] = id; "l1";
//       JSONencoder["add_producto"] = "cobalto";
//       JSONencoder["catidad_kg"] = random(0,30);
//       JSONencoder["lote_add_producto"] = "L1410";
//       JSONencoder["Lote"] = lote;
//       topic = "addProduct";
//       // dato = 4;
//       break;
//     case 4:
// //     {
// //     "id":"ñññ",
// //     "topic":"performance",
// //     "producto":"calcio",
// //     "Rendimiento_kg":"l30",
// //     "time_proceso":"1995-12-17T03:24:00",
// //     "Lote":"L1010"
// // }
//       JSONencoder["id"] = id; // "l1";
//       // JSONencoder["topic"] = "performance";
//       JSONencoder["producto"] = "Calcio";
//       JSONencoder["Rendimiento_kg"] = "l30";
//       JSONencoder["time_proceso"] = fecha;  //"2022-23-23T16:11:07";
//       JSONencoder["Lote"] = lote;
//       topic = "performance";
//       // dato = 5;
//       break;
//     case 5:
// //     {
// //     "id":"l1",
// //     "producto":"calcio",
// //     "Quality":"concentracion del producto 15%",
// //     "time_proceso":"1995-12-17T03:24:00",
// //     "Lote":"L1010",
// //     "topic":"qualityproduct"
// // }
//       JSONencoder["id"] = id; // "l1";
//       JSONencoder["producto"] = "Manganecio";
//       JSONencoder["Quality"] = "Concentracion 28%";
//       JSONencoder["time_proceso"] = fecha;  //"2022-23-23T16:11:07";
//       JSONencoder["Lote"] = lote;
//       // dato = 1;
//       topic = "qualityproduct";
//       break;
//   }

//   char JSONmessageBuffer[300];
//   JSONencoder.printTo(JSONmessageBuffer, sizeof(JSONmessageBuffer));
//   Serial.println("Sending message to MQTT topic..");
//   Serial.println(JSONmessageBuffer);

//   //MQTT
//   client.connect("");
 
//   if (client.publish(topic, JSONmessageBuffer) == true) {
//     Serial.println("Success sending message.");
//     success++;
//   } else {
//     Serial.print("Error sending message. Failed with state: ");
//     Serial.println(client.state());
//     error++;
//   }

//   Serial.print("Success:");
//   Serial.print(success);
//   Serial.print(" Error:");
//   Serial.println(error);
 
//   Serial.println("-------------");
//   client.loop();

//   delay(60000);
// }