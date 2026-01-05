#include <Arduino.h>
#include <Wire.h>
#include <U8g2lib.h>

#define SOIL_MOISTURE_PIN A0

U8G2_SH1106_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);

void drawFace(int x, int y, int mood) {

  u8g2.drawCircle(x, y, 20, U8G2_DRAW_ALL);
  u8g2.drawDisc(x - 6, y - 6, 4, U8G2_DRAW_ALL);
  u8g2.drawDisc(x + 6, y - 6, 4, U8G2_DRAW_ALL);

  if (mood == 1) { // Happy
    u8g2.drawLine(x - 7, y + 8, x - 3, y + 10);
    u8g2.drawLine(x - 3, y + 10, x + 3, y + 10);
    u8g2.drawLine(x + 3, y + 10, x + 7, y + 8);
  } else if (mood == 0) { // Neutral
    u8g2.drawLine(x - 7, y + 10, x + 7, y + 10);
  } else { // Sad
    u8g2.drawLine(x - 7, y + 10, x - 3, y + 8);
    u8g2.drawLine(x - 3, y + 8, x + 3, y + 8);
    u8g2.drawLine(x + 3, y + 8, x + 7, y + 10);
  }
}

void setup() {
  pinMode(SOIL_MOISTURE_PIN, INPUT);
  u8g2.begin();

  u8g2.clearBuffer();
  u8g2.setFont(u8g2_font_ncenB08_tr);
  u8g2.drawStr(5, 20, "Soil Sensor");
  u8g2.sendBuffer();
  delay(2000);
}

void loop() {
  int moistureValue = analogRead(SOIL_MOISTURE_PIN);
  int percentage = map(moistureValue, 1023, 300, 0, 100);

  u8g2.clearBuffer();

  u8g2.setFont(u8g2_font_ncenB08_tr);
  u8g2.drawStr(10, 15, "Moisture:");
  
  char buf[10];
  sprintf(buf, "%d%%", percentage);
  u8g2.setFont(u8g2_font_ncenB14_tr);
  u8g2.drawStr(10, 40, buf);

  if (percentage > 60) drawFace(100, 30, 1);
  else if (percentage >= 30) drawFace(100, 30, 0);
  else drawFace(100, 30, -1);

  u8g2.sendBuffer();
  delay(2000);
}
