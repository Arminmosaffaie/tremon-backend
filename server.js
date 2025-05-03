const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const apiKeyRoute = require('./routes/apiKey');
app.use('/api', apiKeyRoute);

app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});