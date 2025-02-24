module.exports = {
  recursive: true,
  timeout: 5000,
  reporter: 'spec',
  require: 'chai/register-assert',
  spec: 'BACKEND/test/**/*.test.js'
};