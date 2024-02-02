const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cookieParser());
app.use('/auth', authRoutes);
app.use('/protected', protectedRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
