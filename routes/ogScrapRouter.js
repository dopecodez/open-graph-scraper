let express = require('express');
let router = express.Router();
const path = require("path");
const ogManager = require(path.resolve("./managers/ogScrapManager"));

/* GET Open Graph Data endpoint. */
router.post('/', async function (req, res) {
  try {
    let response = await ogManager.getOpenGraphData(req);
    res.send(response);
  } catch (response) {
    res.status(response.status || 500).send(response);
  }
});

module.exports = router
