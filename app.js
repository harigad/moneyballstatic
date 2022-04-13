const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    "minimum_version": "0.4.9",
    "upgrade_url": "https://app.bitrise.io/artifact/121907250/p/8a3822292928ec50dc06c452afb44809",
    "can_skip": false
  }
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
