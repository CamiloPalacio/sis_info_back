const express = require('express')
const readUsuario = require('./Usuarios')
const app = express()
const port = 5001

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

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/create', function (req, res) {
    res.send('Se creó un usuario');
});

app.post('/read', async function (req, res) {
    res.send(await readUsuario());
    console.log(req.body);
});

app.post('/update', function (req, res) {
    res.send('Se actualizó un usuario');
});

app.post('/delete', function (req, res) {
    res.send('Se eliminó un usuario');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
