var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/contact", function (req, res, next) {
  res.render("contact");
});

router.get("/FAQ", function (req, res, next) {
  res.render("FAQ");
});

router.get("/sell", function (req, res, next) {
  res.render("sell");
});
module.exports = router;
