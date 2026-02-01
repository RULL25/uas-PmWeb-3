const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint RESTful API
app.get("/api/transactions", (req, res) => {
  res.json([
    {
      id: 1,
      from: "0xA1b2...123",
      amount: "0.01 ETH",
      message: "Donasi pertama"
    },
    {
      id: 2,
      from: "0xB3c4...456",
      amount: "0.05 ETH",
      message: "Donasi kedua"
    }
  ]);
});

app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});
