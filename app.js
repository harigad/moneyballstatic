const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    "minimum_version": "0.5.1",
    "upgrade_url": "https://app.bitrise.io/artifact/122533280/p/28e8452dbec285d2cd75eebaf2bb4671",
    "can_skip": true
  }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
