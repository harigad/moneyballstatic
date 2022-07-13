const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    "minimum_version": "0.5.17",
    "upgrade_url": "https://app.bitrise.io/artifact/135871183/p/fe6bf5f3dea29ee0444531525d3400b8?source=ship",
    "can_skip": false
  }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
