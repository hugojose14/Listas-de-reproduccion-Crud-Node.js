const express = require('express');
const router= express.Router();
const Lista = require('../models/lista');
const Cancion = require('../models/cancion');

router.get('/', async (req,res)=>{
    
    //Cancion.find() <traemos los datos desde la base de datos (también es asincrono)
    const canciones = await Cancion.find();
    const listas = await Lista.find();
    //Abro un objeto en javascript y le voy a pasar las tareas
    res.render('index',{
        canciones, //canciones:canciones
        listas
    });

});

router.post('/api/addSong',async (req,res) =>{

    //la cancion ahora (objeto) está en una constante
    const cancion = new Cancion(req.body);
    await cancion.save();
    res.redirect('/');
});


router.post('/api/addList',async (req,res) =>{

    //la lista ahora (objeto) está en una constante
    const lista = new Lista(req.body);
    await lista.save();
    res.redirect('/');
});


router.get('/api/delete/:id', async (req,res) =>{
    const {id} = req.params;
    await Cancion.remove({_id:id});
    await Lista.remove({_id:id});
    res.redirect('/');
});

router.get('/api/update/:id', async (req,res)=>{

    const cancion = await Cancion.findById(req.params.id);
    res.render('update',{
        cancion
    });

});

router.get('/api/updateList/:id', async (req,res)=>{

    const lista = await Lista.findById(req.params.id);
    res.render('updateList',{
        lista
    });

});

router.post('/api/update/:id', async (req,res)=>{

    const { id } = req.params;
    await Cancion.update({_id:id},req.body);
    res.redirect('/');
});

router.post('/api/updateList/:id', async (req,res)=>{

    const { id } = req.params;
    await Lista.update({_id:id},req.body);
    res.redirect('/');

});

router.get('/api/addPlay',async(req,res)=>{

});

module.exports = router;