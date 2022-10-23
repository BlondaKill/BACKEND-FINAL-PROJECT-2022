const mongoose = require('mongoose');

const conect = async () =>{
     try {
           await mongoose.connect('mongodb+srv://Laura:pukita@cluster1.9s0gwww.mongodb.net/test')
           console.log('base de datos conectada')
        } catch {
            console.log('no se pudo conectar a la base de datos')
       }
}

module.exports = { conect }