const NewsModel = require("../schemas/news_schema");

exports.getAllNews = async (req, res) => {
  try {
    const allNews = await NewsModel.find();
    res.status(200).json(allNews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
