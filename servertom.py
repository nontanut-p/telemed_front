# Import Lib
from flask import Flask, render_template, request, redirect, url_for, session, jsonify
from flask_cors import CORS
from flask_mysqldb import MySQL
import MySQLdb.cursors
import re
import threading
import time
import serial
import json
from datetime import datetime, date


# APP Config

app = Flask(__name__, static_folder='static')

# ServerKey
app.secret_key = 'de99213c4f0058c6bc39bf54'

now = datetime.now() # current date and time
date_time = now.strftime("%d/%m/%Y - %H:%M")


# DataBase Config  

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'vserver'
 
mysql = MySQL(app)

# Route Funtion
@app.route('/')
def index(): 
    if 'loggedin' in session: 
    
        return render_template('dashboard.html', username=session['username']) 

    return redirect(url_for('login')) 

@app.route('/login', methods = ['POST', 'GET'])
def login():
    msg = ''
    if request.method == 'POST' and 'username' in request.form and 'password' in request.form:

        username = request.form['username']
        password = request.form['password']
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM users WHERE email = %s AND password = %s', (username, password,))
        account = cursor.fetchone()
        
        if account:
            
            session['loggedin'] = True
            session['id'] = account['id']
            session['username'] = account['username']
            
            return redirect(url_for('dashboard'))
        else: 
            msg = 'Incorrect username/password!'
    
    return render_template('login.html', msg=msg)

@app.route('/logout')
def logout():

    session.pop('loggedin', None)
    session.pop('id', None)
    session.pop('username', None)
    return redirect(url_for('login'))

@app.route('/dashboard')
def dashboard():
    
    if 'loggedin' in session: 
        return render_template('dashboard.html', username=session['username']) 
    
    return redirect(url_for('login')) 


    # Client Session - Staff

@app.route('/client_login', methods = ['POST'])
def client_login():
    # email,password
    if request.method == 'POST' and 'username' in request.form and 'password' in request.form:

        username = request.form['username']
        password = request.form['password']
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM users WHERE email = %s AND password = %s', (username, password,))
        account = cursor.fetchone()
        
        if account:
            
            uid = account['id']
            username = account['username']
            group = account['group']
            return jsonify({ "login": "true","uid": uid,"username": username,"group": group, })
        
        else: 
            
            return jsonify({ "login": "false", })
    
    return jsonify({ "login": "false", })


# Client Session - Patient

@app.route('/patient_login', methods = ['POST'])
def patient_login():
    #card_number  
    if request.method == 'POST' and 'card_number' in request.form and 'firstname' in request.form:

        card_number = request.form['card_number']
        firstname = request.form['firstname']
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM patient WHERE card_number = %s AND firstname = %s', (card_number, firstname,))
        patient = cursor.fetchone()
        
        if account:
            
            patientin = 'true'
            pid = patient['id']
            patient = patient['firstname']+' '+patient['lastname'] 
            return jsonify({ "login": patientin,"pid": pid,"patient": patient,})
        
        else: 
            
            patientin = 'false'
            
            return jsonify({ "login": patientin, })
    
    return jsonify({ "login": "false", })


@app.route('/patient_register', methods = ['POST'])
def patient_register(): 
    
    if request.method == 'POST' and 'firstname' in request.form and 'lastname' in request.form:

        prefixname = request.form['prefixname']
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        card_number = request.form['card_number']
        birthday = request.form['birthday']
        gender = request.form['gender']
        tel = request.form['tel']
        nationality = request.form['nationality']
        ethnicity = request.form['ethnicity']
        religion = request.form['religion']
        blood_group = request.form['blood_group']
        occupation = request.form['occupation']
        congenital_disease = request.form['congenital_disease']
        allergic = request.form['allergic']
        register = datetime.today()  
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor) 
        cursor.execute('INSERT INTO patient VALUES (NULL,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)', (prefixname,firstname,lastname,card_number,birthday,gender,tel,nationality,ethnicity,religion,blood_group,occupation,congenital_disease,allergic,register)) 
        pid = cursor.lastrowid
        mysql.connection.commit()
        
        patientin = 'true'
        patient = firstname+' '+lastname 
        
        return jsonify({ "login": patientin,"pid": pid,"patient": patient,})
         
    
    return jsonify({ "register": "false", })


@app.route('/measurement_record', methods = ['POST'])
def measurement_record(): 
    
    if request.method == 'POST' and 'pid' in request.form and 'device_key' in request.form :
        
        pid = request.form['pid']
        input_hr = request.form['input_hr']
        input_rr = request.form['input_rr']                
        input_temp = request.form['input_temp']               
        input_spo2 = request.form['input_spo2']
        input_pr = request.form['input_pr']
        input_dia = request.form['input_dia']
        input_sys = request.form['input_sys']
        device_key = request.form['device_key']
        recorder = request.form['recorder']
        measure_date = datetime.today()
        
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor) 
        cursor.execute('INSERT INTO measure VALUES (NULL,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)', (pid,input_sys,input_dia,input_hr,input_rr,input_temp,input_spo2,input_pr,device_key,recorder,measure_date))
        mysql.connection.commit()
        
        status = 'true'
        return jsonify({ "record": status,})
    
    return jsonify({ "record": "false", })


    if __name__ == '__main__':
    run_port = 9999
    app.run(debug=False, port=run_port)