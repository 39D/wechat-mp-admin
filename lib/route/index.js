const path = require('path');
const express = require('express');
const router = express.Router();

// api router
router.use('/api/v1', require('./v1'));

// wechat router
router.use('/mp', require('./mp'));

// static router
router.use('/public', express.static(path.resolve(__dirname, '../../public')));

module.exports = router;