const express = require('express');
const router = express.Router();

const controladorEmpleados = require('../controllers/controladorEmpleados')

router.get('/', controladorEmpleados.list);
router.post('/add', controladorEmpleados.create);
router.get('/delete/:id', controladorEmpleados.delete);
router.get('/update/:id', controladorEmpleados.edit);
router.post('/update/:id', controladorEmpleados.update);
module.exports = router;