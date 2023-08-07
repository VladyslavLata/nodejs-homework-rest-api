const mongoos = require("mongoose"); // для підключення до mongobd

const app = require("./app");

const { DB_HOST } = process.env;

mongoos.set("strictQuery", true);

mongoos
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("connect success!");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
