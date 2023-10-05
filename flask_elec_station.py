import os
import flask
from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def home():
    temp = os.getcwd()
    print(temp)
    return (

    )

@app.route('/Charts')
def Charts():
   return render_template('charts.html')

@app.route('/Map')
def Map():
   return render_template('map.html')
if __name__ == '__main__':
   app.run(debug=True)
