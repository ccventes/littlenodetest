const express = require('express');
const app = express();
app.get('/',(req,res)=> res.send('<h1>Hello world with express y HTML!</h1>'))

app.listen(8080);
console.log('server on');