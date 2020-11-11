const port = process.env.PORT || '9000';
const host = process.env.HOST || 'localhost';
const express = require('express');
const app = express();

app.use(require('./src'));

app.listen(port, host);

console.log('Server running on, %s:%d', host, port);

module.exports = app;
