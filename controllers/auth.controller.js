const {response} = require('express');
const { validationResult } = require('express-validator');

const createUser =(req, res = response )=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            ok:false,
            msg:errors.mapped()
        })
    }

    const {user, email, password} = req.body;

    return res.json({
        ok:true,
        msg:'Usuario Creado Con Exito'
    })
}

const login = (req, res = response )=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            ok:false,
            msg:errors.mapped()
        })
    }

    const {email, password} = req.body;

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