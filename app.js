const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    "minimum_version": "0.5.22",
    "upgrade_url": "https://app.bitrise.io/artifact/142204475/p/cfbda90ae9e0e2e87a6f13f2d61a4197?source=ship",
    "can_skip": false
  }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
