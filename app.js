const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    "minimum_version": "0.5.18",
    "upgrade_url": "https://app.bitrise.io/artifact/136330506/p/4c188438246e8dcd92de00aef43f4b97?source=ship",
    "can_skip": false
  }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
