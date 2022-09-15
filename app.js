const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    "minimum_version": "0.5.23",
    "upgrade_url": "https://app.bitrise.io/artifact/145010345/p/10c41ce81e7a3fafa52600daa597a11c?source=ship",
    "can_skip": false
  }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
