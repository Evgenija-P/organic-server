const OrderModel = require("../schemas/order_schema");

exports.createOrder = async (req, res) => {
  const counter = await OrderModel.findOne().sort({ order_number: -1 }).select("order_number");
  const order_number = counter ? counter.order_number + 1 : 1;
  const order = {
    ...req.body,
    order_number: order_number,
  };
  const result = await OrderModel.create(order);
  res.status(201).json(result);
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await OrderModel.findById(req.params.id);
    if (!order) {
      res.status(404).json({ message: "Order not found" });
    } else {
      res.status(200).json(order);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
