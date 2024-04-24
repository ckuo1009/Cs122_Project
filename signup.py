from flask import request, jsonify
from flask_mysqldb import MySQL

def register_user(mysql):
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        cur = mysql.connection.cursor()

        # check if user already has the account
        cur.execute("SELECT * FROM users WHERE username = %s", (username,))
        if cur.fetchone():
            return jsonify({'status': 'error', 'message': 'account already exists'}), 409

        try:
            # insert 
            cur.execute("INSERT INTO users (username, password) VALUES (%s, %s)", (username, password))
            mysql.connection.commit()
            return jsonify({'status': 'success', 'message': 'register successfully'})
        except Exception as e:
            return jsonify({'status': 'error', 'message': f'register fail: {str(e)}'}), 500
        finally:
            cur.close()
