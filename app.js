const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'Home', status: 200 })
})

app.get('/hello', (req, res) => {
  res.json({ msg: 'Hello', status: 200 })
})

app.get('/dashboard', (req, res) => {
  res.json({ msg: 'dashboard', status: 200 })
})

app.listen(5000, () => console.log('server runnign on port 5000'))