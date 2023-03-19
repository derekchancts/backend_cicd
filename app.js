const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'Home' })
})

app.get('/hello', (req, res) => {
  res.json({ msg: 'Hello' })
})

app.get('/dashboard', (req, res) => {
  res.json({ msg: 'dashboard' })
})

app.listen(5000, () => console.log('server runnign on port 5000'))