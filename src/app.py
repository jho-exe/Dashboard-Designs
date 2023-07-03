from flask import Flask, render_template, request, redirect, url_for
from configBD import connectionBD

app = Flask(__name__)

@app.route('/')
def inicio():
    return render_template('users.html')

@app.route('/registrar_usuario', methods=['POST'])
def registrar_usuario():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        fullname = request.form['fullname']
        age = request.form['age']
        gender = request.form['gender']
        
        # Realizar la inserción en la base de datos
        conexion_MySQLdb = connectionBD()
        cursor = conexion_MySQLdb.cursor()
        sql = "INSERT INTO users (username, email, password, fullname, age, gender) VALUES (%s, %s, %s, %s, %s, %s)"
        valores = (username, email, password, fullname, age, gender)
        cursor.execute(sql, valores)
        conexion_MySQLdb.commit()
        
        cursor.close()
        conexion_MySQLdb.close()
        
        return redirect(url_for('inicio'))
    else:
        return 'Método HTTP incorrecto'

if __name__ == '__main__':
    app.run(debug=True, port=3000)
