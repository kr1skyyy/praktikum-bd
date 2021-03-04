const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>hi</h1>');
});

app.get('/user', (req, res) => {
    res.send('Page user')
    res.render('index.html')
})

app.listen(3000);

console.log('Port 3000');