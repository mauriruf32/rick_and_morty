const { Favorite } = require("../DB_connection");

async function deleteFav(req, res) {
  try {
    const { id } = req.params;

    await Favorite.destroy({ where: { id } });

    const allFavs = await Favorite.findAll();

    return res.status(200).json(allFavs);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

module.exports = deleteFav;
