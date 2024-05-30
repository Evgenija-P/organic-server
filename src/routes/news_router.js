const { Router } = require("express");

const router = Router();

router.get("/", (reg, res, next) => {
  res.send({ ok: "news page" });
});
router.get("/:slug", (reg, res, next) => {
  res.send({ ok: "main page" });
});

module.exports = router;
