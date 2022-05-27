const accountRepository = require('../repository/account');
const { newError } = require('../utils/customErrors');

function getAccount(accountId) {

  try {
    const account = accountRepository.findAccountByAccountId(accountId)

    if (!account)
      newError(404, 'Account not found');

    return account

  } catch (err) {
    newError(500, 'Internal Server Error');
  }
}

function createAccount(payload) {

  validateCreateAccount(payload)
  try {
    const data = accountRepository.saveAccount(payload)
    return data
  } catch (err) {
    newError(500, 'Internal Server Error');
  }
}

function debitAccount(payload) {

  const account = accountRepository.findAccountByAccountId(payload.accountId);
  
  if (!account)
    newError(404, 'Account not found')

  const newAmount = account.amount - payload.amount
  if(!payload.amount || newAmount < 0 ) {
    newError(400, 'Invalid Amount');
  }

  accountRepository.updateAmountByAccountId(payload.accountId, newAmount);

}


function creditAccount(payload) {

  const account = accountRepository.findAccountByAccountId(payload.accountId);
  
  if (!account)
    newError(404, 'Account not found')

  const newAmount = account.amount + payload.amount;

  accountRepository.updateAmountByAccountId(payload.accountId, newAmount);

}


function validateCreateAccount(payload) {
  let messages = [];

  if (!payload) {
    messages.push('Payload invalid');
  }

  if (!payload.amount) {
    messages.push('Amount is empty');
  }

  if (!payload.personId) {
    messages.push('PersonId is empty');
  }

  if (messages.length) {
    newError(400, messages);
  }
}

module.exports = {
  getAccount,
  createAccount,
  debitAccount,
  creditAccount
}
