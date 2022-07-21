const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    "minimum_version": "0.5.19",
    "upgrade_url": "https://app.bitrise.io/artifact/136891934/p/9912767b0e41193bb7fd3bc55a81b3c4?source=ship",
    "can_skip": false
  }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
