const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());



const PORT = process.env.PORT || 3000;

module.exports.handler = serverless(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});