/*Express provides methods to specify what function is called for
 a particular HTTP verb ( GET , POST , SET , etc.)*/
const express = require("express");

//With PORT i define in witch port its gonna run the server
const PORT = process.env.PORT || 3001;


//Invoque express
const app = express();

const cors = require("cors");
app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Tamo progesando :D" });
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
