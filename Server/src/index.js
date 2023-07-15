require("dotenv").config();
const { PORT } = process.env;
const server = require("./app");
const { conn } = require("./DB_connection");

conn
  .sync({ force: false })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
