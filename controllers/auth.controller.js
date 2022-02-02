const {response} = require('express')

const createUser =(req, res = response )=>{
    return res.json({
        ok:true,
        msg:'Usuario Creado Con Exito'
    })
}

const login = (req, res = response )=>{
    return res.json({
        ok:true,
        msg:'Login de usuario'
    })
}

const validarToken = (req, res = response )=>{
    return res.json({
        ok:true,
        msg:'Validar Usuario'
    })
}


module.exports={
    createUser,
    login,
    validarToken
}