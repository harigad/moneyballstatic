const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    "minimum_version": "0.5.0",
    "upgrade_url": "https://app.bitrise.io/artifact/122298169/p/92d0a33f5700c982cf8554f6d1f51ee7",
    "can_skip": true
  }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
