const express = require('express');
const path = require('path');
const { getFramework } = require('./api');

const app = express();
const port = process.env.PORT || 5000;
const isProd = process.env.NODE_ENV === 'production';

app.get('/api/framework', (req, res, next) => {
  getFramework()
    .then(framework => res.json(framework))
    .catch(next);
});


if (isProd) {
  console.log('PROD');
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
  });
}



app.listen(port, err => {
  if (err) { console.log(err); }

  isProd
    ? console.log(`Application now available at http://localhost:${port}`)
    : console.log(`UI server now available at http://localhost:${port}`);
});
