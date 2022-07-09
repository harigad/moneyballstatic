const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    "minimum_version": "0.5.17",
    "upgrade_url": "https://app.bitrise.io/artifact/135537351/p/6a2026fead92fcc63667c2e58676a5a7?source=ship",
    "can_skip": false
  }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
