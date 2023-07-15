require("dotenv").config();
const { URL } = process.env;
const axios = require("axios");

const getCharById = async (req, res) => {
    try {
      const { id } = req.params;
      /* const { status, name, species, origin, image, gender, error } = await axios(
        `${URL}/${id}`
      ).data; */
      const { data } = await axios(`${URL}/${id}`);
      const { status, name, species, origin, image, gender, error } = data;
      const character = { id, status, name, species, origin, image, gender };
      return name
        ? res.json(character)
        : res.status(404).json({ message: error });
    } catch (reason) {
      return res.status(500).json({ message: reason });
    }
  };

module.exports = getCharById;



