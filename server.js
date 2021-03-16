// utliza express y debe cargarse en el teminal como npm install express
const { json } = require("express");
const express = require("express");
const app = express();
// se llama con el localhost:8000
const port = 8000;

// se utiliza para trabajar sessiones es decir que cada paguina se carga en forma independiente
const session = require('express-session');

app.use(session({secret: 'codingdojorocks'})); 

// se emplea solo para post, push, delete, en el caso de get no se utiliza
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// pwermite que el servidor lea las carpetas estarticas de acceso publico
app.use(express.static(__dirname + "/public"));
// permite qie el servisdor acceda a las carpetas de vistas (views)
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

//accedemos al sistema de rutas definidos en la carpeta de rutas (servicio en este caso) 
app.use(require('./routes/servicios'));

 




app.listen( port, () => console.log(`Listening on port: ${port}`) );