const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    "minimum_version": "0.4.8",
    "upgrade_url": "https://app.bitrise.io/artifact/121670797/p/586e63bc00fe5aa2187b718d8c55244c?source=ship",
    "can_skip": false
  }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
