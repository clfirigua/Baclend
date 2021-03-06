const {Router } = require('express');
const { check } = require('express-validator');
const {createUser,login,validarToken} = require('../controllers/auth.controller');
const {validarCampos} = require('../middlewares/validarCampos.middlewares');
const {validar} = require('../middlewares/validarJWT');
const router = Router();

//nuevo usuario
router.post('/new',[
    check('user', 'El Name User no es valido').not().isEmpty().isLength({min:6}),
    check('email', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').isLength({min:6}),
    validarCampos
],createUser);

//login de usuarios
router.post('/',[
    check('email', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').isLength({min:6})
],login);

//validar y revalidar token
router.get('/renew',[
    validar
],validarToken);



module.exports = router