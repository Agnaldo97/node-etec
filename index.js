const express = require('express');
const app = express();
const account = require('./routes/account');
const { PORT } = require('./configs/constants')

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({message: 'alive', status: 'OK'});
});

app.use('/account', account);


app.listen(PORT, () => {
  console.log(`Servidor rodadando no path: http://localhost:${PORT}`);
});
