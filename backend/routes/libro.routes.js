var express = require("express");
var router = express.Router();
var librosController=require('../controllers/libro.controllers') 
var multiparty = require("connect-multiparty");
var multipartyMiddleware = multiparty({ uploadDir: "./uploads" });
//pagina de inicio
router.put("/inicio", librosController.inicio);
//guardae libro
router.post('/guardar-libro',librosController.saveLibro);
// ver informacion de todos los libros
router.get('/libros',librosController.getLibros);
// ver informacion de un libro
router.get('/libro/:id',librosController.getLibro);
// eliminar un libro
router.delete('/libro/:id',librosController.deleteLibro);
// actualizar un libro
router.put('/libro/:id',librosController.updateLibro);

//agregar imagenes
router.post('/subir-imagen/:id',multipartyMiddleware, librosController.uploadImagen);

//recuperar imagenes
router.get('/get-imagen/:imagen',librosController.getImagen);


//obtener libro por nombre ver la informacion de un libro
router.get('/libro-nombre/:nombre',librosController.getLibroNombre);


module.exports = router;