'use strict';

const express = require('express');
const config = require('./src/config')
console.log(config);
// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world ! 🤖\n I am a Developer 👨🏻‍💻');
});

app.listen(config.PORT, config.HOST);
console.log(`Running 🚀 on http://${config.HOST}:${config.PORT} 🟢`);
