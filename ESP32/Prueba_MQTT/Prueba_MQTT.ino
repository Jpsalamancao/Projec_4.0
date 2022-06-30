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
int selectTopic = 5;
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

  //Variables switch (selectTopic) {
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
      topic = "perfor// Variablesmance";
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
  // }

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