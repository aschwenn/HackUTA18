import time
import RPi.GPIO as GPIO
import Adafruit_MCP3008

thisPiID = 1

# Setting up board
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)

# Pin variables
pump = 35 # pin 19
moisture = 33 # pin 13
CLK = 31
CS = 29
adcin = 40
lowTank = 38

# Setting pins
GPIO.setup(pump, GPIO.OUT)
GPIO.output(pump, 0)
GPIO.setup(moisture, GPIO.IN)
GPIO.setup(CLK, GPIO.OUT)
GPIO.setup(CS, GPIO.IN)
GPIO.setup(adcin, GPIO.OUT)
GPIO.setup(lowTank, GPIO.IN)
mcp = Adafruit_MCP3008.MCP3008(clk=CLK,cs=CS,miso=moisture,mosi=adcin)

# MySQL connection
try:
    import MySQLdb
except:
    import pip
    pip.main(['install', 'mysqlclient'])
    import MySQLdb
    
def connect(hostname, database, username, password):
    try:
        return MySQLdb.connect(host = hostname, user = username, passwd = password, db = database)
    except:
        return False

def readDB(db):
    curs = db.cursor()
    sql = 'SELECT * FROM HACKUTA WHERE id=' + str(thisPiID)
    curs.execute(sql)
    data = curs.fetchone()
    print(data)
    return data
    
def immediateWater(db):
    curs = db.cursor()
    sql = 'UPDATE HACKUTA SET water_immediate=0 WHERE id=' + str(thisPiID)
    curs.execute(sql)
    db.commit()
    print('Watered')
    
def updateMoisture(db):
    m = mcp.read_adc(0) # read from first analog input channel
    curs = db.cursor()
    sql = 'UPDATE HACKUTA SET moisture=' + str(m) + ' WHERE id=' + str(thisPiID)
    curs.execute(sql)
    db.commit()
    print('Updated moisture readings: ' + str(m))
    
def updateWaterLevel(db):
    curs = db.cursor()
    sql = 'UPDATE HACKUTA SET tank_low=1 WHERE id=' + str(thisPiID)
    curs.execute(sql)
    db.commit()
    print('Low water level')
    
# Turns on the water pump for time t (sec)
def pumpWater(t):
    GPIO.output(pump, 1)
    time.sleep(t)
    GPIO.output(pump, 0)
    
def main():
    print("Attempting to connect...")
    db = MySQLdb.connect(host = 'sql3.freemysqlhosting.net:3306',
                         user = 'sql3260130', passwd = 'd9zph1U6Al', db = 'sql3260130')
    if(not db):
        print("Connection failed.\n")
        return 0
    print("Connected to database.\n")
    
    # Forever loop
    i = 0
    while True:
        data = readDB(db)
        if data:
            amount = data[2]
            period = data[3] * 60 # min => sec
            scheduled = data[4]
            water_immediate = data[5]
            amount2 = data[6]
            
            if water_immediate:
                # water the plant right now
                if (amount2):
                    pumpWater(amount2 / 100 * 60)
                else:
                    print('Invalid immediate water amount value')
                    
            if GPIO.input(lowTank):
                updateWaterLevel(db)
            
            if i == 10:
                # flow rate = 100mL/min
                pumpWater(amount / 100 * 60)
            
            i += 1
            updateMoisture(db)
            time.sleep(period / 10)
        else:
            print('Database error')
            time.sleep(1000)
    
main()
