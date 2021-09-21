const {readFileSync, writeFileSync} = require('fs');
const express = require('express');

const app = express();
const PORT = 5000;

app.use(express.static('public'));

app.get('/', (request, response) => {
  
  const count = readFileSync('./count.txt', 'utf-8');

  console.log(`Vister count= ${count}`);

  const newCount = parseInt(count) + 1;

  writeFileSync('./count.txt', newCount.toString(), {flag: 'w+'});

  response.send(index.html);

});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));