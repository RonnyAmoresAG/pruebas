var express=require('express');
var bodyParser=require('body-parser');
var app= express();
var librosRoutes=require('./routes/libro.routes');

app.use(bodyParser.urlencoded({extends:false}));
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, X-Request-With, Content-Type,Accept, Access-Control-Allow, Request-Method');
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
    res.header("Access-Control-Allow-Credentials", true);
    next();
 });

 //rutas

 /*
 app.get('/',(req,res)=>{
    res.status(404).send(
        "<h1>Hola, bienvenidos</h1>"
    )
 }) */
 app.use('/',librosRoutes);
 module.exports=app;

 //CORS