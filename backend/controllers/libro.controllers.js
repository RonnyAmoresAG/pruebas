
var Libro=require('../models/libro');
var fs=require('fs');
var path=require('path');

var controller={
    inicio:function(req,res) {
        return res.status(201).send({message:"<h2>Bienvenido 2</h2>"});
    },
    /*saveLibro:function(req,res){
        var libro=new Libro();
        var params=req.body;
        libro.nombre=params.nombre;
        libro.autor=params.autor;
        libro.edicion=params.edicion;
        libro.anio=params.anio;
        libro.precio=params.precio;
        console.log("ok",libro)
        libro.save()
    },*/
    
    saveLibro:async function(req,res){
        try{
        var libro=new Libro();
        var params=req.body;
        libro.nombre=params.nombre;
        libro.autor=params.autor;
        libro.edicion=params.edicion;
        libro.anio=params.anio;
        libro.precio=params.precio;
        libro.imagen=null;

        var libroStored= await libro.save();
        
        if(!libroStored){
            return res.status(404).send({message:'No se guardo el libro'});
        }

        return res.status(201).send({libro:libroStored});
      }catch(err){
        return res.status(500).send({message:'error al guardar'});
      }
    },
    getLibros:async function(req,res){
        try{
        const libros=await Libro.find({}).sort();
        if(libros.lenght==0){
            return res.status(404).send({message:'No hay libros para mostrar'});
        }

        return res.status(200).send({libros});
        }catch(err){
            return res.status(500).send({message:'error al devolver los datos'});
        }
    },

    getLibro: async function(req,res){
     try{
     var libroId=req.params.id;
     if(!libroId) return res.status(404).send({message:'El libro no existe'});
    var libro = await Libro.findById(libroId);
    if(!libro) return res.status(404).send({message:'El libro no existe'});
    return res.status(200).send({libro});
    }catch{
        return res.status(500).send({message:'error al recuperar el libro id'});
     }

   },

   deleteLibro: async function(req,res){
    try{
    var libroId=req.params.id;
    var libroRemove= await Libro.findByIdAndDelete(libroId);
    if(!libroRemove) return res.status(404).send({message:'El libro no se puede eliminar'});
    return res.status(200).send({libro:libroRemove});
   }catch{
       return res.status(500).send({message:'error al eliminar los datos'});
    }
  },

  updateLibro: async function(req,res){
    try{
    var libroId=req.params.id;
    var update=req.body;
  // new como un nuevo libro pero se mantiene el id
    var libroUpdate= await Libro.findByIdAndUpdate(libroId, update,{new:true});
    if(!libroUpdate) return res.status(404).send({message:'No se puede actualizar'});
    return res.status(200).send({libro:libroUpdate});
   }catch{
       return res.status(500).send({message:'error al actualizar los datos'});
    }
  },

  uploadImagen:async function(req,res){
    try {
      var libroId=req.params.id;
      var fileName='Imagen no subida';
      if(req.files){
        var filePath=req.files.imagen.path;
        var fileSplit=filePath.split('\\');
        fileName=fileSplit[1];
        var extSplit=fileName.split('.');
        var fileExt=extSplit[1];
        if(fileExt==='png' || fileExt==='jpg' || fileExt==='jpeg' || fileExt==='gif'|| fileExt==='PNG'){
          var libroUpdated= await Libro.findByIdAndUpdate(libroId,{imagen:fileName},{new:true});
          if(!libroUpdated) return res.status(404).send({message:'El auto no existe y no se puede subir la imagen'});
          return res.status(200).send({libro:libroUpdated});
        }else{
          fs.unlink(filePath,(err)=>{
            return res.status(200).send({message:'Extensión no válida'});
          });
        }
      }else{
        return res.status(200).send({message: fileName});
      }
    } catch (err) {
      return res.status(500).send({ message: 'La imagen no se ha subido' });
    }
  },

  
  getImagen:async function(req,res){
    try {
      var file=req.params.imagen;
      var path_file="./uploads/"+file;

      var exists=await fs.promises.access(path_file)
      .then(()=>true)
      .catch(()=>false);
      if(exists) return res.sendFile(path.resolve(path_file));
      else return res.status(200).send({message:'La imagen no existe'});
    } catch (err) {
      return res.status(500).send({ message: 'Error al recuperar la imagen' });
    }
  },

  
  getLibroNombre: async function(req,res){
    try{
    var libroNombre=req.params.nombre;
    if(!libroNombre) return res.status(404).send({message:'El libro no existe'});
   var libro = await Libro.findOne({ nombre: libroNombre });
   if(!libro) return res.status(404).send({message:'El libro no existe'});
   return res.status(200).send({libro});
   }catch{
       return res.status(500).send({message:'error al recuperar el libro id'});
    }

  },

}

module.exports=controller