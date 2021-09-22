const {readFileSync, writeFileSync} = require('fs');
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

const LOCAL_HOST = `http://localhost:${PORT}`;

app.use(express.static('public'));

app.get('/', (request, response) => {
  
  const count = readFileSync('./count.txt', 'utf-8');

  console.log(`Vister count= ${count} at ${__dirname}`);
  
  const newCount = parseInt(count) + 1;

  writeFileSync('./count.txt', newCount.toString(), {flag: 'w+'});

//  response.sendFile(`/index.html?newCount=${newCount}`);
    response.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport"content="width=device-width, initial-scale=1" />
      <title>PiO1 Hosted Website</title>
      <style>
        img {
          width: 60%;
          height: auto;
        }
      </style>
    </head>
    
    <body>
    <h1>Welcome to Captain Apollo's Website.</h1>
    <p>This page has been viewed ${newCount} times!</p>
    
    <p>This simple little application is being used to test the end to end development life cycle.</p>
    <p>From desktop to GitHub to running under PM2.</p>
    
    <div>
      <img src="/images/captainapollo_webhop_me.png" >
    </div>
    
    </body>
    </html>` )
});

app.listen(PORT, () => console.log(LOCAL_HOST));