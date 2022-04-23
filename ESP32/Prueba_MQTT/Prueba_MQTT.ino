#include <Arduino.h>
#include <ArduinoJson.h>
#include <WiFi.h>
#include <PubSubClient.h>
#include <time.h>
 
const char* ssid = "Krloz Medina";
const char* password =  "F@mili@571112";
const char* mqttServer = "192.168.5.221";
const char* ntpServer = "co.pool.ntp.org";
const int mqttPort = 1234;

const long  gmtOffset_sec = -21600;
const int   daylightOffset_sec = 3600;

int dato = 1;
char* topic;
int success = 0;
int error = 0;
char fecha[50];
struct tm timeinfo;
 
WiFiClient espClient;
PubSubClient client(espClient);
 
void setup() {
  //Configuracion puerto serial
  Serial.begin(115200);
  Serial.println();
 
  //Configuracion WIFI
  WiFi.begin(ssid, password);
 
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.println("Connecting to WiFi..");
  }
 
  Serial.println("Connected to the WiFi network");
 
  //Configuracion servidor MQTT
  client.setServer(mqttServer, mqttPort);
 
  while (!client.connected()) {
    Serial.println("Connecting to MQTT...");
 
    if (client.connect("")) {
      Serial.println("connected, compilado desde VSCode en MacOS");
    } else {
      Serial.print("failed with state ");
      Serial.print(client.state());
      delay(2000);
    }
  }

  //Configuracion al servido NTP (Network Time Protocole)
  configTime(gmtOffset_sec, daylightOffset_sec, ntpServer);
}
 
void loop() {
  //NTP
  if(!getLocalTime(&timeinfo)){
    Serial.println("Failed to obtain time");
    return;
  }

  strftime(fecha, 50, "%d-%B-%Y %H:%M:%S", &timeinfo);
  
  //JSON
  StaticJsonBuffer <300> JSONbuffer;
  JsonObject& JSONencoder = JSONbuffer.createObject();

  switch (dato) {
    case 1:
      JSONencoder["id"] = "l1";
      JSONencoder["temperatura"] = random(20, 120);
      JSONencoder["time_proceso"] = fecha;  //"2022-23-23T16:11:07";
      JSONencoder["lote_proceso"] = "L1010";
      topic = "record";
      dato = 2;
      break;
    case 2:
      JSONencoder["id"] = "l1";
      JSONencoder["producto"] = "varsol";
      JSONencoder["lote_saldo"] = "L1102";
      JSONencoder["cantidad"] = random(0,30);
      topic = "addProduct";
      dato = 3;
      break;
    case 3:
      JSONencoder["id"] = "l1";
      JSONencoder["materia_prima"] = "cobalto";
      JSONencoder["cantidad"] = random(0,30);
      JSONencoder["lote_mp"] = "L1410";
      topic = "charger";
      dato = 4;
      break;
    case 4:
      JSONencoder["id"] = "l1";
      JSONencoder["cantidad_producida"] = random(0,20);
      JSONencoder["cantidad_empacada"] = random(0,20);
      JSONencoder["rendimiento"] = "89.7";
      topic = "perform";
      dato = 5;
      break;
    case 5:
      JSONencoder["id"] = "l1";
      JSONencoder["nombre_muestra"] = "M4312";
      JSONencoder["resultado_muestra"] = random(0, 100);
      dato = 1;
      topic = "quality";
      break;
  }

  char JSONmessageBuffer[100];
  JSONencoder.printTo(JSONmessageBuffer, sizeof(JSONmessageBuffer));
  Serial.println("Sending message to MQTT topic..");
  Serial.println(JSONmessageBuffer);

  //MQTT
  client.connect("");
 
  if (client.publish(topic, JSONmessageBuffer) == true) {
    Serial.println("Success sending message.");
    success++;
  } else {
    Serial.print("Error sending message. Failed with state: ");
    Serial.println(client.state());
    error++;
  }

  Serial.print("Success:");
  Serial.print(success);
  Serial.print(" Error:");
  Serial.println(error);
 
  Serial.println("-------------");
  client.loop();

  delay(10000);
}