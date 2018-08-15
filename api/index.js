const express = require('express');
const frameworks = require('./frameworks');

const app = express();
const port = process.env.PORT || 5001;

app.get('/random', async (req, res) => {
  const randomFramework = Math.floor(Math.random() * Math.floor(frameworks.length));

  res.json({
    framework: frameworks[randomFramework]
  });
});

app.listen(port, err => {
  if (err) { console.log(err); }

  console.log(`API is now available at http://localhost:${port}`)
});
