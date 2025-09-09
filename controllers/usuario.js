const comunes = require("../config/comunes")
const modelo = require("../models/usuario")

exports.autenticar = async (req, res) => {
    const { usuario, clave } = req.body
    try {
        autenticar = await modelo.autenticar(usuario, clave)
        let respuesta = comunes.respuestaGenerica()
        respuesta.autenticar = autenticar
        return res.send(respuesta)
    } catch (err) {
        return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
    }
}