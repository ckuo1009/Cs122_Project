from flask import Flask, request
from flask_mysqldb import MySQL
from signup import register_user
from login import login_user


app = Flask(__name__, static_url_path='', static_folder='frontend')

# MySQL 
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Aa25912663'
app.config['MYSQL_DB'] = 'quiz100'

mysql = MySQL(app)
# route
@app.route('/login', methods=['POST'])  # 
def login():
    return login_user(mysql)
@app.route('/register', methods=['POST'])
def register():
    return register_user(mysql)

# 
@app.route('/')
def home():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)
