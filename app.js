const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    "minimum_version": "0.5.16",
    "upgrade_url": "https://app.bitrise.io/artifact/134197567/p/a049f31a008c17ecf0aa2abab9831004?source=ship",
    "can_skip": false
  }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
