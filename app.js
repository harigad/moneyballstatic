const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    "minimum_version": "0.5.15",
    "upgrade_url": "https://app.bitrise.io/artifact/133462120/p/019ce99b057b86a037168fd0df71e67e?source=ship",
    "can_skip": false
  }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
