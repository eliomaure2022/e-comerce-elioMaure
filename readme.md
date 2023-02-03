1-iniciar proyecto: npm init -y
2-instalar dependencias express sequelize 3-pg pg-hstore cors dotenv
4-instalar dependencias de desarrollo: 5-nodemon morgan
6-estructura de carpetas:
/src
--- /services
--- /models
--- /controllers
--- /routes
--- /middlewares
--- /seeders
--- /tests
--- /utils
--- /templates
app.js
server.js
7- Scripts start, dev en package.json
8-crear sercer basico
9-configurar la conexion a db
10-autenticar la db en app.js
11-crear modelo generico de users
12-crear init models
13-sincronizar base de datosd
14-registrar usuario--> creacion de usuarios
encritar contraseñas
bcrypt
15-autenticacion con el login
