const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    "minimum_version": "0.5.14",
    "upgrade_url": "https://app.bitrise.io/artifact/132372824/p/e1278c97cc08ae5b228b234c0d1e3160?source=ship",
    "can_skip": false
  }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
