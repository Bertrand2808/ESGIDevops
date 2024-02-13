const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const VISITS_FILE = 'visits.txt';

app.get('/', (req, res) => {
  let visits = 0;
  try {
      visits = parseInt(fs.readFileSync(VISITS_FILE, 'utf8'));
  } catch (err) {
      console.error(err);
  }

  visits++;
  fs.writeFileSync(VISITS_FILE, visits.toString());

  const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Simple Web App</title>
          <link rel="stylesheet" href="style.css">
      </head>
      <body>
          <div class="container">
              <h1>Nombre de visites :</h1>
              <p class="visits">${visits}</p>
          </div>
      </body>
      </html>
  `;

  res.send(html);
});

app.get('/', (req, res) => {
    let visits = 0;
    try {
        visits = parseInt(fs.readFileSync(VISITS_FILE, 'utf8'));
    } catch (err) {
        console.error(err);
    }

    visits++;
    fs.writeFileSync(VISITS_FILE, visits.toString());

    res.send(`Nombre de visites : ${visits}`);
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
