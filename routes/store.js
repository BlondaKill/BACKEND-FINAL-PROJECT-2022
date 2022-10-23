const express = require("express");
const router = express.Router();
const { storeController, vistaGeneral, crearItem, vistaUnica, busqueda, editarItem, elimirItem, ejemploPass, consultaAxios} = require("../controller/controller");
const {validar} = require("../middleware/validarId")
const {check} = require("express-validator");



//get
router.get('/', storeController);
router.get('/ver, vistaGeneral');
router.get('/ver/:id, validar, vistaUnica');
router.get('/buscar/:title', busqueda);
router.get('/pass', ejemploPass);
router.get('/axios', consultaAxios);

//post
router.post('/crear',[
     check("title").not().isEmpty().withMessage("se tiene que cargar un title"),
     check("singer").not().isEmpty().withMessage("se tiene que cargar un singer"),
     check("price").not().isEmpty().withMessage("se tiene que cargar un price"),
     check("stock").not().isEmpty().withMessage("se tiene que cargar si esta en stock"),  
],crearItem);

//put
router.put('/editar/:id',validar,[
  check("title").not().isEmpty().withMessage("se tiene que cargar un title"),
  check("singer").not().isEmpty().withMessage("se tiene que cargar un singer"),
  check("price").not().isEmpty().withMessage("se tiene que cargar un price"),
  check("stock").not().isEmpty().withMessage("se tiene que cargar si esta en stock"),  
], editarItem);

//delete
router.delete('/eliminar/:id',validar,elimirItem);




  module.exports = router