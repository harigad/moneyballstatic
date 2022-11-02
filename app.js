const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    "minimum_version": "0.5.26",
    "upgrade_url": "https://app.bitrise.io/artifact/152254312/p/c08d40f23765867a4b406d5485a45179?source=ship",
    "can_skip": false
  }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
