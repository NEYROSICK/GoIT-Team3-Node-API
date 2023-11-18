const User = require("../../models/user");

const updateFavorite = async (req, res) => {
  const { userId } = req.user;
  const { petId } = req.body;

  await User.updateOne(userId, { $push: { favoritesArr: petId } });

  res.status(200).json({ message: "Added to favorites successfully" });
};

module.exports = updateFavorite;