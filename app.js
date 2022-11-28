const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    "minimum_version": "0.5.29",
    "upgrade_url": "https://app.bitrise.io/artifact/156422698/p/7ed2f44c604a99fcbfd034828ce80156?source=ship",
    "can_skip": false
  }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
