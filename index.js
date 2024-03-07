console.clear();

import express from 'express';
const app = express();
const port = 4811;

app.get('/', (req, res) => {
  res.send(homePage());
});

app.get('/', (req, res) => {
  res.send(aboutPage());
});

app.listen(port, () => {
  console.log(`URL: http://localhost:${port}`);
});