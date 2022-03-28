const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    "minimum_version": "0.4.3",
    "upgrade_url": "https://app.bitrise.io/artifact/119172817/p/9ec1f159e32ba9ffedec9bf84e7ad045?source=ship",
    "can_skip": true
  }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
