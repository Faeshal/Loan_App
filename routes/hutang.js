const express = require("express");
const router = express.Router();
const hutangController = require("../controllers/hutang");

router.get("/", hutangController.getIndex);

router.get("/add", hutangController.getAddHutang);
router.post("/add", hutangController.postAddHutang);

router.get("/edit/:hutangId", hutangController.getEditHutang);
router.post("/edit", hutangController.postEditHutang);

router.get("/about", hutangController.getAbout);

router.post("/delete", hutangController.postDeleteHutang);

module.exports = router;
