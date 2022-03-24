const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({
    "minimum_version": "0.4.0",
    "upgrade_url": "https://app.bitrise.io/artifact/118590723/p/9ed12729a66f1f4948330674109e7eec",
    "can_skip": true
  }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})