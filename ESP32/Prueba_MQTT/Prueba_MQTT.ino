#include <ArduinoJson.h>
#include <WiFi.h>
#include <PubSubClient.h>
 
const char* ssid = "Krloz Medina";
const char* password =  "F@mili@571112";
const char* mqttServer = "192.168.5.221";
const int mqttPort = 1234;

int dato = 1;
char* topic;
int success = 0;
int error = 0;
 
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
 
    if (client.connect("")) {
      Serial.println("connected, compilado desde VSCode en MacOS");
    } else {
      Serial.print("failed with state ");
      Serial.print(client.state());
      delay(2000);
    }
  }
 
}
 
void loop() {
  client.connect("");

  StaticJsonBuffer <300> JSONbuffer;
  JsonObject& JSONencoder = JSONbuffer.createObject();

  switch (dato) {
    case 1:
      JSONencoder["id"] = "l1";
      // JSONencoder["topic"] = "record";
      JSONencoder["temperatura"] = "26.2";
      JSONencoder["time_proceso"] = "2022-23-23T16:11:07";
      JSONencoder["lote_proceso"] = "L1010";
      topic = "record";
      dato = 2;
      break;
    case 2:
      JSONencoder["id"] = "l1";
      // JSONencoder["topic"] = "addProduct";
      JSONencoder["producto"] = "varsol";
      JSONencoder["lote_saldo"] = "L1102";
      JSONencoder["cantidad"] = "25.2";
      topic = "add";
      dato = 3;
      break;
    case 3:
      JSONencoder["id"] = "l1";
      // JSONencoder["topic"] = "charger";
      JSONencoder["materia_prima"] = "cobalto";
      JSONencoder["cantidad"] = "18.6";
      JSONencoder["lote_mp"] = "L1410";
      topic = "charger";
      dato = 4;
      break;
    case 4:
      JSONencoder["id"] = "l1";
      // JSONencoder["topic"] = "perform";
      JSONencoder["cantidad_producida"] = "16.3";
      JSONencoder["cantidad_empacada"] = "16.1";
      JSONencoder["rendimiento"] = "89.7";
      topic = "perform";
      dato = 5;
      break;
    case 5:
      JSONencoder["id"] = "l1";
      // JSONencoder["topic"] = "quality";
      JSONencoder["nombre_muestra"] = "M4312";
      JSONencoder["resultado_muestra"] = "59.2";
      dato = 1;
      topic = "quality";
      break;
  }

  char JSONmessageBuffer[100];
  JSONencoder.printTo(JSONmessageBuffer, sizeof(JSONmessageBuffer));
  Serial.println("Sending message to MQTT topic..");
  Serial.println(JSONmessageBuffer);
 
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
