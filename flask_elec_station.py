import flask
from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def home():
    return (
        f'Welcome to Group 2s Project page on Electric Charging Stations in the US!<br/>'
        f'Data Pages:<br/>'
        f'/api/v1.0/Charts<br/>'
        f'/api/v1.0/Map<br/>'
    )

@app.route('/api/v1.0/Charts')
def Charts():
   return render_template('index_one.html')

@app.route('/api/v1.0/Map')
def Map():
   return render_template('index_two.html')
if __name__ == '__main__':
   app.run()
