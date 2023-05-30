const {Router } = require('express');
const controller = require('./controller');


const router = Router();    

router.get('/', controller.getClientes);
router.get('/:id_cliente', controller.getCliente);
router.post('/', controller.insertarCliente);
router.delete('/:id_cliente', controller.eliminarCliente);
router.put('/:id_cliente', controller.actualizarCliente);


module.exports = router;