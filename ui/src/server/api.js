const fetch = require('node-fetch');
const circuitBreaker = require('opossum');
const { sendMetrics } = require('./utils/metrics');

const breaker = circuitBreaker(fetch, {
  timeout: 3000,                // If our function takes longer than 3 seconds, trigger a failure
  errorThresholdPercentage: 50, // When 50% of requests fail, trip the circuit
  resetTimeout: 5000            // After 5 seconds, try again
});

breaker.fallback((url, err) => {
  sendMetrics('FAILED', url);

  return err;
});

breaker.on('timeout', (err) => sendMetrics('TIMEOUT', err));
breaker.on('reject', (err) => sendMetrics('REJECT', err));
breaker.on('open', () => sendMetrics('OPEN'));
breaker.on('halfOpen', () => sendMetrics('HALF-OPEN'));
breaker.on('close', (results) => sendMetrics('CLOSE', results));
breaker.on('fallback', (err) => sendMetrics('FALLBACK', err));

exports.getFramework = () => breaker.fire('http://localhost:5001/random')
  .then(res => {
    if (res.status !== 200) {
      console.log('message', res.message);
      throw Error(res.message);
    }

    return res.json();
  })
  .catch(err => Promise.reject(err));
