const express = require("express");
const app = express();
const cors = require("cors"); // helps client and server in different ports to interact together

//middleware
app.use(cors());
app.use(express.json()); // gives access to req.body

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
