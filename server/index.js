const express = require('express');
const app = express();

app.use(express.static('dist'));

app.get('/test', (req, res) => {
  res.status(200).send("/test request: All Systems Online");
})

app.listen(4500, () => console.log('Roger Roger'));