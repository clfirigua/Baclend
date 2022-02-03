const { response } = require('express');
const Usuario = require('../models/Usuario.model');
const bcrypt = require('bcryptjs')
const { generarJWT } = require('../helpers/jwt')

const createUser = async (req, res = response) => {

    const { user, email, password } = req.body;

    try {

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Opps algo salio mal En el servidor'
        })
    }

    //verificar Correo
    const usuario = await Usuario.findOne({ email });
    if (usuario) {
        return res.status(400).json({
            ok: false,
            msg: 'El Usario ya existe'
        })
    };

    //Crear Usuario con el Modelo
    const dbUsuario = new Usuario(req.body);

    //encryptar password
    const salt = bcrypt.genSaltSync(10);
    dbUsuario.password = bcrypt.hashSync(password, salt);

    //Generar JsonWebToken
    const token = await generarJWT(dbUsuario.id, user)

    //Guardar Usuarios db
    await dbUsuario.save();

    //Generar Respuesta
    return res.status(200).json({
        ok: true,
        uid: dbUsuario.id,
        user,
        token
    });

}

const login = async (req, res = response) => {

    const { email, password } = req.body;
    try {
        const userDb = await Usuario.findOne({email});
        
        if (!userDb) {
            return res.status(400).json({
                ok: false,
                msg: 'Email ya existe'
            })
        }

        // validar Password
        const validPassword = bcrypt.compareSync(password, userDb.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Password Invalid'
            })
        }

        //Generar JWT
        const token = await generarJWT(userDb.id, userDb.user);

        //Respuesta del servicio

        return res.json({
            ok: true,
            uid: userDb.id,
            user: userDb.user,
            token
        })


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Oops Login Internal error '
        });
    }


}

const validarToken = async (req, res = response) => {
   
    try {
        const {uid, name } = req;
        const token = await generarJWT(uid, name);
    
        return res.json({
            ok: true,
            uid,
            name,
            token
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg:'Internal Error'
        })
    }
}


module.exports = {
    createUser,
    login,
    validarToken
}