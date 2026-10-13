const express = require('express');
const router = express.Router();
// il router si occupa SOLO di collegare verbo + percorso alla funzione del controller
const postController = require('../controllers/postController');

router.get('/', postController.index);
router.get('/:id', postController.show);
router.post('/', postController.store);
router.put('/:id', postController.update);
router.patch('/:id', postController.modify);
router.delete('/:id', postController.destroy);

module.exports = router;
