const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

mongoose
  .connect(URI)
  .then(() => {
    console.log(`Database is connected successfully`);
  })
  .catch((e) => {
    console.log(e);
  });
