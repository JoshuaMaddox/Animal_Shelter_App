const express = require('express');
const router = express.Router();

router.use('/clients', require('./clients'))

router.use('/animals', require('./animals'))

module.exports = router;
