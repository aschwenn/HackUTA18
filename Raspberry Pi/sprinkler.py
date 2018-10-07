import time
import RPi.GPIO as GPIO

thisPiID = 1

# Setting up board
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)

# Pin variables
pump = 35 # pin 19

# Setting pins
GPIO.setup(pump, GPIO.OUT)
GPIO.output(pump, 0)

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
    
def immediateWater(db):
    curs = db.cursor()
    sql = 'UPDATE HACKUTA SET water_immediate=0 WHERE id=' + str(thisPiID)
    curs.execute(sql)
    db.commit()
    print('Watered')
    
def updateMoisture(db):
    m = 0
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
    db = MySQLdb.connect(host = 'sql3.freemysqlhosting.net',
                         user = 'sql3260130', passwd = 'd9zph1U6Al',
                         db = 'sql3260130')
    if(not db):
        print("Connection failed.")
    print("Connected to database.")
    
    immediateWater(db)
    readDB(db)
    
    # Forever loop
    while True:
        time.sleep(5)
        pumpWater(500)
    
main()