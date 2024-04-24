from flask import request, jsonify
from flask_mysqldb import MySQL

def login_user(mysql):
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        cur = mysql.connection.cursor()

        try:
            # 
            cur.execute("SELECT * FROM users WHERE username = %s AND password = %s", (username, password))
            user = cur.fetchone()
            if user:
                #login success
                return jsonify({'status': 'success', 'message': 'login successfully'})
            else:
                # login fail
                return jsonify({'status': 'error', 'message': 'account or password incorrect'}), 401
        except Exception as e:
            # 
            return jsonify({'status': 'error', 'message': str(e)}), 500
        finally:
            # close connection
            cur.close()
