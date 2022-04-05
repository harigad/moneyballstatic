const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    "minimum_version": "0.4.6",
    "upgrade_url": "https://app.bitrise.io/artifact/120768575/p/872f142357aa3cf68c76bc591fdcff0f",
    "can_skip": false
  }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
