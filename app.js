const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    "minimum_version": "0.5.0",
    "upgrade_url": "https://app.bitrise.io/build/b9296ff1-dcd2-4a68-8040-5ade53f9807e",
    "can_skip": true
  }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
