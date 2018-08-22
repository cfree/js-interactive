const fetch = require('node-fetch');

exports.getFramework = () => fetch('http://localhost:5001/random')
  .then(res => {
    if (res.status !== 200) {
      throw Error(res.message);
    }

    return res.json();
  })
  .catch(err => Promise.reject(err));
