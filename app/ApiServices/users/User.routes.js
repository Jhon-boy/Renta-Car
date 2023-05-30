const {Router } = require('express');
const controller = require('./controller');


const router = Router();

router.get('/:id', controller.getUser);
router.get('/', controller.getUsuarios);
router.post('/', controller.insertUser);
router.patch('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;