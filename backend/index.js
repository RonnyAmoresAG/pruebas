var mongoose=require('mongoose');
var port='3600';
mongoose.promise=global.Promise;
mongoose.set("strictQuery",false);
var app=require('./app');
mongoose.connect('mongodb://localhost:27017/libros')
.then(()=>{
    console.log("conexion exitosa con la BD");
    app.listen(port,()=>{
        console.log("conexion establecida en: localhost:3600");
    })
})
.catch(err=>console.log(err))
