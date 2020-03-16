const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;


// app.use(express.static('client/HomePage'));
// app.use(express.static('client/css'));
// app.use(express.static('client/html'));
// app.use(express.static('client/js'));
app.use(express.static(path.join(__dirname, 'client')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/html/HomePage/home.html'));
})

app.get('/Catalog', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/html/CatalogPage/catalog.html'));
})

app.listen(port, () => {
  console.log(`Server Started On Port: ${port}`);
})