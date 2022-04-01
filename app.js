const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    "minimum_version": "0.4.4",
    "upgrade_url": "https://app.bitrise.io/artifact/119791611/p/eedc20f1558010e10cad7ed842fd686a?source=ship",
    "can_skip": false
  }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
