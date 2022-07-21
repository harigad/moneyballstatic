const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    "minimum_version": "0.5.20",
    "upgrade_url": "https://app.bitrise.io/artifact/137311060/p/b0a0be4a76e84c6cc6f20aaf514da6c3?source=ship",
    "can_skip": false
  }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
