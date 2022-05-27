const db = require('../configs/db');

function findAccountByAccountId(accountId) {
    const data = db.query(`SELECT * FROM account WHERE id = ?`, [accountId]);

    return data[0]
}

function saveAccount(payload) {
  const { personId, amount } = payload;
  const result = db.run('INSERT INTO account(person_id, amount,status) VALUES (@personId, @amount, @status)', { personId, amount, status: 1 });

  return { message: 'Account created successfully', accountId: result.lastInsertRowid };
}

function updateAmountByAccountId(accountId, amount) {
  const result = db.run('UPDATE account SET amount = @amount WHERE id = @accountId', { amount, accountId});

  return { message: 'Account updated successfully', accountId: result.lastInsertRowid };
}


module.exports = {
  findAccountByAccountId,
  saveAccount,
  updateAmountByAccountId
}
