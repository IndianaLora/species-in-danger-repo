
const moongose = require("mongoose");

const speciesSchema = new moongose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },

});

module.exports = moongose.model("Species", speciesSchema);
