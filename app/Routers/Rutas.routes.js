const {Router } = require('express');

const {  getRoles } = require('../Controllers/Roles.controllers')
const dbConexion = require('../../config/db');

const router = Router();


router.get('/roles', getRoles);

module.exports = router;
