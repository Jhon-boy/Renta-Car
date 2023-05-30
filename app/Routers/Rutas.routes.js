const {Router } = require('express');
const {  getRoles } = require('../Controllers/Roles.controllers');

const user = require('../ApiServices/users/User.routes');
const licencias = require('../ApiServices/licencias/Licencia.routes');
const clientes = require('../ApiServices/clientes/Clientes.routes');

const router = Router();


router.get('/roles', getRoles);
router.use('/users', user);
router.use('/licencia', licencias);
router.use('/clientes', clientes);

module.exports = router;
