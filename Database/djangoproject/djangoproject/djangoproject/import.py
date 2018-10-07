
import mysql.connector

cnx = mysql.connector.connect(user='scott', password='password',
                              host='127.0.0.1',
                              database='employees')
cnx.close()


'''
import mysql.connector
from mysql.connector import Error

def connect():
    """ Connect to MySQL database """
    try:
        conn = mysql.connector.connect(host='localhost',
                                       database='howdysprinkler',
                                       user='root',
                                       password='chingchong22')
        if conn.is_connected():
            print('Connected to MySQL database')
 
    except Error as e:
        print(e)
 '''