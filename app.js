const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const errorMiddleware = require('./middlewares/error.middleware');
const app = express();

app.use(cors());
app.use(express.json());



app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

module.exports.handler = serverless(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});