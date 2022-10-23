const {Dj} = require("../models/shop");
const validar = async (req, res, next) => {
    const item = await Dj.findById(req.params.id)
    if (item !== null) {
        next()
    } else {
        res.status(500).json({msg: "el id es invalido, no existe"})
    }
}


module.exports = {validar}
