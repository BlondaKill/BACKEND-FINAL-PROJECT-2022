const { Dj } = require('../models/shop');
const {validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const axios = require("axios");


const storeController = (req, res) => {
      res.send('Hello World!')
}

const ejemploPass = async (req, res) =>{
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(req.body.pass, salt)
    let comparacion = bcrypt.compareSync(req.body.pass, hash)
    res.json({hash,comparacion}) 
}
const consultaAxios = async (req, res) =>{
     try {
        const respuesta = await axios.get("https://rickandmortyapi.com/api")
        res.status(200).json({status: respuesta.status,data: respuesta.data})
    } catch (error) {
        res.json({status: error.response.status, data: error.response.data})
     }
}


const vistaGeneral = async (req, res) =>{
    const item = await Dj.find()
    res.status(200).json({ item })


}

const vistaUnica = async (req, res) =>{
    const item = await Dj.findbyId(req.params.id) 
    res.status(200).json({ item })
}

const busqueda = async (req, res) =>{
    const item = await Dj.findOne({title: req.params.title})
    res.status(200).json({ item })
}

const crearItem = async (req, res) =>{
    try {
        const err = validationResult(req)
        if (err.isEmpty()) {
           const item = new Dj(req.body) 
           await item.save()
           res.status(201).json({item})
        } else {
           res.status(501).json(err)
        }   
        } catch (error) {
        res.status(501).json({error})
    }   
}

const editarItem = async (req, res) =>{
    try {
        const err = validationResult(req)
        if (err.isEmpty()) {
           await Dj.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).json({msg: "se actualizo"})
        } else {
           res.status(501).json(err)
        }   
        } catch (error) {
        res.status(501).json({error})
    }   
}
 const elimirItem = async(req, res) =>{
        item = await Dj.findByIdAndDelete(req.params.id)
        res.status(200).json({msg: "el item siguiente se elimino correctamente", item})

 }




module.exports = {storeController, vistaGeneral,crearItem, vistaUnica, busqueda, editarItem, elimirItem, ejemploPass, consultaAxios }