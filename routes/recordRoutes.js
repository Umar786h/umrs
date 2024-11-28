// routes/recordRoutes.js
const express = require('express');
const { createRecord, getRecords, updateRecord, deleteRecord } = require('../controllers/recordController');

const router = express.Router();

router.post('/records', createRecord);
router.get('/records', getRecords);
router.put('/records/:id', updateRecord);
router.delete('/records/:id', deleteRecord);

module.exports = router;
