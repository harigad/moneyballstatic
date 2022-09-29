const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    "minimum_version": "0.5.25",
    "upgrade_url": "https://app.bitrise.io/artifact/147455219/p/c585f4f4ec9ae3e923cc02f19711bd3e?source=ship",
    "can_skip": false
  }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
