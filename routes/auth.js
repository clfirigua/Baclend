const {Router } = require('express');
const {createUser,login,validarToken} = require('../controllers/auth.controller')
const router = Router();

//nuevo usuario
router.post('/new',createUser);

//login de usuarios
router.post('/',login);

//validar y revalidar token
router.get('/renew',validarToken);



module.exports = router