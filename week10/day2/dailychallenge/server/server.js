const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
  res.send('Hello From Express');
});

app.post('/api/world', (req, res) => {
  const receivedValue = req.body.value;
  console.log('Received value:', receivedValue);
  res.send(`I received your POST request. This is what you sent me: ${receivedValue}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
