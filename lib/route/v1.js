const express = require('express');
const router = express.Router();

router.get('/hello', require('../controller/hello').sayHello);

module.exports = router;