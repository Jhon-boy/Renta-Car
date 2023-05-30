const {Router } = require('express');
const controller = require('./controller');

const router =  Router();

router.get('/:Id_Licencia' , controller.getLicencia);
router.post('/', controller.insertarLicencia);
router.delete('/:Id_Licencia', controller.eliminarLicencia);
router.patch('/:Id_Licencia', controller.actualizarLicencia);


module.exports = router;