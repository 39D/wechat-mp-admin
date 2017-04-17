const express = require('express');
const router = express.Router();

// 微信验证
router.get('/', require('../controller/mp').validate);

// 处理微信事件
router.post('/', require('../controller/mp').processEvent);

module.exports = router;