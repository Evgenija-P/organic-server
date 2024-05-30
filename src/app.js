const express = require("express");
const app = express();
const cors = require("cors");
const feedback_router = require("./routes/feedback_router");
const news_router = require("./routes/news_router");
const order_router = require("./routes/order_router");
const product_router = require("./routes/product_router");
const team_router = require("./routes/team_router");

app.use("/feedback", feedback_router);
app.use("/news", news_router);
app.use("/order", order_router);
app.use("/product", product_router);
app.use("/team", team_router);

app.use(cors());
app.use(express.json());

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// const server = app.listen(3010, () => {
//   console.log("server started");
// });
module.exports = app;
