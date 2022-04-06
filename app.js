const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    "minimum_version": "0.4.7",
    "upgrade_url": "https://app.bitrise.io/artifact/120931518/p/84c1d09f929fdc2359adac21c84e1307",
    "can_skip": false
  }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
