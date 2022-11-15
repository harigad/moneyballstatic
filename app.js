const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    "minimum_version": "0.5.27",
    "upgrade_url": "https://app.bitrise.io/artifact/154573104/p/0ac55375980c2b407409c864408acb07?source=ship",
    "can_skip": false
  }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
