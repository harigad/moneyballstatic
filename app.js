const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    "minimum_version": "0.4.5",
    "upgrade_url": "https://app.bitrise.io/artifact/120570620/p/865cda87e59c0ef445f9fdcac52c8c82?source=ship",
    "can_skip": false
  }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
