require("dotenv").config();
/*Express provides methods to specify what function is called for
 a particular HTTP verb ( GET , POST , SET , etc.)*/
const express = require("express");

//Invoque express to configure the app
const app = express();

//Mongoose allow us to interact with mongodb
const moongose = require("mongoose");

moongose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => {
    console.log(e + "houston!");
  });
const db = moongose.connection;
db.on("error", (error) => console.error(error + "Houston!"));
db.once("open", () => console.log("Connected to Database"));

//With PORT i define in witch port its gonna run the server
const PORT = process.env.PORT || 3001;

//......
const cors = require("cors");
app.use(cors());

//allow
app.use(express.json());

const speciesRouter = require("./routes/species");
app.use("/species", speciesRouter);

app.get("/api", (req, res) => {
  res.json({ message: "Tamo progesando :D" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
