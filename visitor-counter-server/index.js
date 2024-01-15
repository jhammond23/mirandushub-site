const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Enable JSON body parsing

let visitorCount = 0; // Store visitor count in memory

app.get("/visitors", (req, res) => {
  visitorCount++;
  res.json({ count: visitorCount });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Visitor counter server listening on port ${port}`);
});
