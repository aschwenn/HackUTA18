import time
import RPi.GPIO as GPIO

# Setting up board
GPIO.setmode(GPIO.BOARD)

# Pin variables
pump = 35 # pin 19

# Setting pins
GPIO.setup(pump, GPIO.OUT)
GPIO.output(pump, 0)

# Turns on the water pump for time t (sec)
def pumpWater(t):
    GPIO.output(pump, 1)
    time.sleep(t)
    GPIO.output(pump, 0)
    
def main():
    pumpWater(500)
    
main()