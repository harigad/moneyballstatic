const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    "minimum_version": "0.5.21",
    "upgrade_url": "https://app.bitrise.io/artifact/138295682/p/27a91c2c058b380aa35cbc4f3439febe?source=ship",
    "can_skip": false
  }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
