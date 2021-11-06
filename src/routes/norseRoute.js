const express = require('express');
const router = express.Router();
const controller = require('../controllers/norseController');

router.get('/', controller.get);
router.get('/:codificar', controller.get);
router.get('/:decodificar', controller.get);


router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;