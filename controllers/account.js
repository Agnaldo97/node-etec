const accountService = require('../services/account');

module.exports.getAccount = (req, res, next) => {
  try {
    const accountId = Number(req.params.account_id)
    const account = accountService.getAccount(accountId)

    res.status(200).send(account);
  } catch (err) {
    console.error(`Error getAcount`, err.message);
    res.status(err.statusCode || 500).send({ message: err.message });
  }
};

module.exports.createAccount = (req, res, next) => {
  try {
    const payload = req.body
    const account = accountService.createAccount(payload)

    res.status(200).send(account);
  } catch (err) {
    console.error(`Error createAccount`, err.message);
    res.status(err.statusCode || 500).send({ message: err.message });
  }
};

module.exports.creditAccount = (req, res, next) => {
  try {
    const payload = req.body
    const account = accountService.creditAccount(payload)

    res.status(200).send({ message: "Credit successfully" });
  } catch (err) {
    console.error(`Error createAccount`, err.message);
    res.status(err.statusCode || 500).send({ message: err.message });
  }
};


module.exports.debitAccount = (req, res, next) => {
  try {
    const payload = req.body
    accountService.debitAccount(payload)

    res.status(200).send({ message: "Debit successfully" });
  } catch (err) {
    console.error(`Error createAccount`, err.message);
    res.status(err.statusCode || 500).send({ message: err.message });
  }
};
