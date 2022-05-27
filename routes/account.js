const express = require('express');
const router = express.Router();
const account = require('../controllers/account');

router.get('/:account_id', account.getAccount);
router.post('/', account.createAccount);
router.patch('/credit', account.creditAccount);
router.patch('/debit', account.debitAccount);

module.exports = router;
