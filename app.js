const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    "minimum_version": "0.5.31",
    "upgrade_url": "https://app.bitrise.io/artifact/160499124/p/1849f74f8dc4900eaa77f7f1f77750a5?source=ship",
    "can_skip": false
  }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
