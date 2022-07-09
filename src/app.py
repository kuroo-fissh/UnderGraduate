# app.py
from flask import Flask,request,jsonify
import json
import pymysql
import os
import cv2
import re
from flask_cors import CORS


app = Flask(__name__)
app.config["JSON_AS_ASCII"] = False
CORS(app, supports_credentials=True)
db = pymysql.connect(host='localhost',user='root',database='labelbee',passwd='Gly200111202428',port=3306)


@app.route('/userDefaultValue', methods=['GET','POST'])
def addComment():
    if request.method == 'POST':
        data = json.loads(request.get_data(as_text=True))
        print(data)
        msg={
            "status":0
        }
        return jsonify(msg)