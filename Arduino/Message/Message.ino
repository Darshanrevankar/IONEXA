// Pin numbers where the LED and button are connected
const int ledPin = 13;
const int buttonPin = 2; // You can change this to the desired pin

void setup() {
  // Set the LED pin as an output
  pinMode(ledPin, OUTPUT);

  // Set the button pin as an input with internal pull-up resistor
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop() {
  // Read the state of the button (LOW when pressed, HIGH when released)
  int buttonState = digitalRead(buttonPin);

  // If the button is pressed, turn on the LED
  if (buttonState == LOW) {
    digitalWrite(ledPin, HIGH);
  } else {
    // If the button is released, turn off the LED
    digitalWrite(ledPin, LOW);
  }
}
