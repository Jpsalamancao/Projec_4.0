#include <ArduinoJson.h>
#include <WiFi.h>
#include <PubSubClient.h>
 
const char* ssid = "Krloz Medina";
const char* password =  "F@mili@571112";
const char* mqttServer = "192.168.5.221";
const int mqttPort = 1234;
//const char* mqttUser = "yourInstanceUsername";
//const char* mqttPassword = "yourInstancePassword";

int dato = 1;
char* topic = "record";
int count = 0;
 
WiFiClient espClient;
PubSubClient client(espClient);
 
void setup() {
 
  Serial.begin(115200);
  Serial.println();
 
  WiFi.begin(ssid, password);
 
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.println("Connecting to WiFi..");
  }
 
  Serial.println("Connected to the WiFi network");
 
  client.setServer(mqttServer, mqttPort);
 
  while (!client.connected()) {
    Serial.println("Connecting to MQTT...");
 
    if (client.connect("ESP32Client")) {
 
      Serial.println("connected");
 
    } else {
 
      Serial.print("failed with state ");
      Serial.print(client.state());
      delay(2000);
 
    }
  }
 
}
 
void loop() {

  StaticJsonBuffer<300> JSONbuffer;
  JsonObject& JSONencoder = JSONbuffer.createObject();

  //topic = dato;
  switch (dato) {
    case 1:
      JSONencoder["id"] = "l1";
      JSONencoder["temperatura"] = "26.2";
      JSONencoder["time_proceso"] = "2022-23-23T16:11:07";
      JSONencoder["lote_proceso"] = "L1010";
      topic = "record";
      dato = 2;
      break;
    case 2:
      JSONencoder["id"] = "l1";
      JSONencoder["producto"] = "varsol";
      JSONencoder["lote_saldo"] = "L1102";
      JSONencoder["cantidad"] = "25.2";
      topic = "add";
      dato = 3;
      break;
    case 3:
      JSONencoder["id"] = "l1";
      JSONencoder["materia_prima"] = "cobalto";
      JSONencoder["cantidad"] = "18.6";
      JSONencoder["lote_mp"] = "L1410";
      //topic = "charger";
      dato = 4;
      break;
    case 4:
      JSONencoder["id"] = "l1";
      JSONencoder["cantidad_producida"] = "16.3";
      JSONencoder["cantidad_empacada"] = "16.1";
      JSONencoder["rendimiento"] = "89.7";
      topic = "perform";
      dato = 5;
      break;
    case 5:
      JSONencoder["id"] = "l1";
      JSONencoder["nombre_muestra"] = "M4312";
      JSONencoder["resultado_muestra"] = "59.2";
      dato = 1;
      topic = "quality";
      break;
  }
 count = count + 1;
  /*JSONencoderRecord["id"] = "l1";
  JSONencoderRecord["temperatura"] = "26.2";
  JSONencoderRecord["time_proceso"] = "2022-23-23T16:11:07";
  JSONencoderRecord["lote_proceso"] = "L1010";
  //JsonArray& values = JSONencoder.createNestedArray("values");
 
  //values.add(20);
  //values.add(21);
  //values.add(23);*/
 
  char JSONmessageBuffer[100];
  JSONencoder.printTo(JSONmessageBuffer, sizeof(JSONmessageBuffer));
  Serial.println("Sending message to MQTT topic..");
  Serial.println(JSONmessageBuffer);
 
  if (client.publish(topic, JSONmessageBuffer) == true) {
    Serial.print("Success sending message, contador: ");
    Serial.println(count);
  } else {
    Serial.print("Error sending message, constador: ");
    Serial.print(count);
  }
 
  //client.loop();
  Serial.println("-------------");
   client.loop();


  delay(10000);

  /*StaticJsonBuffer<300> JSONbufferAdd;
  JsonObject& JSONencoderAdd = JSONbufferAdd.createObject();
  JSONencoderAdd["id"] = "l1";
  JSONencoderAdd["producto"] = "varsol";
  JSONencoderAdd["lote_saldo"] = "L1102";
  JSONencoderAdd["cantidad"] = "25.2";
  char JSONmessageBufferAdd[100];
  JSONencoderAdd.printTo(JSONmessageBufferAdd, sizeof(JSONmessageBufferAdd));
  if (client.publish("add", JSONmessageBufferAdd) == true) {
    Serial.println("Success sending message");
  } else {
    Serial.println("Error sending message add");
  }
  client.loop();

  delay(5000);

  StaticJsonBuffer<300> JSONbufferCharger;
  JsonObject& JSONencoderCharger = JSONbufferCharger.createObject();
  JSONencoderCharger["id"] = "l1";
  JSONencoderCharger["materia_prima"] = "cobalto";
  JSONencoderCharger["cantidad"] = "18.6";
  JSONencoderCharger["lote_mp"] = "L1410";
  char JSONmessageBufferCharger[100];
  JSONencoderCharger.printTo(JSONmessageBufferCharger, sizeof(JSONmessageBufferCharger));
  if (client.publish("charger", JSONmessageBufferCharger) == true) {
    Serial.println("Success sending message");
  } else {
    Serial.println("Error sending message charger");
  }
  client.loop();

  delay(5000);

  StaticJsonBuffer<300> JSONbufferPerform;
  JsonObject& JSONencoderPerform = JSONbufferPerform.createObject();
  JSONencoderPerform["id"] = "l1";
  JSONencoderPerform["cantidad_producida"] = "16.3";
  JSONencoderPerform["cantidad_empacada"] = "16.1";
  JSONencoderPerform["rendimiento"] = "89.7";
  char JSONmessageBufferPerform[100];
  JSONencoderPerform.printTo(JSONmessageBufferPerform, sizeof(JSONmessageBufferPerform));
  if (client.publish("perform", JSONmessageBufferPerform) == true) {
    Serial.println("Success sending message");
  } else {
    Serial.println("Error sending message perform");
  }
  client.loop();

  delay(5000);

  /*StaticJsonBuffer<300> JSONbufferQuality;
  JsonObject& JSONencoderQuality = JSONbufferQuality.createObject();
  JSONencoderQuality["id"] = "l1";
  JSONencoderQuality["nombre_muestra"] = "M4312";
  JSONencoderQuality["resultado_muestra"] = "59.2";
  char JSONmessageBufferQuality[100];
  JSONencoderQuality.printTo(JSONmessageBufferQuality, sizeof(JSONmessageBufferQuality));
  if (client.publish("quality", JSONmessageBufferQuality) == true) {
    Serial.println("Success sending message");
  } else {
    Serial.println("Error sending message quality");
  }
 
  client.loop();
  delay(5000);*/
}
