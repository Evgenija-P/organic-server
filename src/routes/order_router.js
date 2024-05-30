const { Router } = require("express");

const router = Router();

router.post("/", (reg, res, next) => {
  res.send({ ok: "main page" });
});
router.get("/", (reg, res, next) => {
  res.send({ ok: "order page" });
});
router.get("/:id", (reg, res, next) => {
  res.send({ ok: "main page" });
});

module.exports = router;
