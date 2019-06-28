const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use(function (req, res, next) {
  app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
  });
  next();
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
});

const port = process.env.PORT || '3000';
app.set('port', port);

// const server = http.createServer(app);
// server.listen(port, () => {
//   console.log('LFMC Server running on', port);
// });

// const options = {
//     key: fs.readFileSync('./ssl/private.pem'),
//     cert: fs.readFileSync('./ssl/bundle.pem'),
// };

// const secure = https.createServer(options, app);
// secure.listen(port, () => {
//   console.log('LFMC Secure Server running on', port);
// });

const server = http.createServer(app);
server.listen(port, () => {
  console.log('LFMC Server running on', port);
});

