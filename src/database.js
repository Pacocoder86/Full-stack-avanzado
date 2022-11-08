import mongoose from "mongoose";

const uri =
  "mongodb+srv://admin1:Paco0386@cluster0.r9lg6aj.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Db is connected!!"))
  .catch((err) => console.log(err));
