const express = require('express');
const app = express();
const userRoutes = require('./server/routes/userRoutes');

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.use(express.json());

app.use('/api', userRoutes);

