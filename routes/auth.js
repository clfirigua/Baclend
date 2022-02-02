const {Router } = require('express');

const router = Router();

//nuevo usuario
router.post('/new',(req, res)=>{
    return res.json({
        ok:true,
        msg:'Usuario Creado Con Exito'
    })
});

//login de usuarios
router.post('/',(req, res)=>{
    return res.json({
        ok:true,
        msg:'Login de usuario'
    })
});

//validar y revalidar token
router.get('/renew',(req, res)=>{
    return res.json({
        ok:true,
        msg:'Validar Usuario'
    })
});



module.exports = router