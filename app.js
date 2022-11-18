const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    "minimum_version": "0.5.28",
    "upgrade_url": "https://app.bitrise.io/artifact/155837795/p/9a76619e5ebc02dbce407e6e8ecae756?source=ship",
    "can_skip": false
  }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
