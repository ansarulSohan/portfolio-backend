import express from "express";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const PORT = process.env.PORTFOLIO_PORT || 3000;
const API_NAME = process.env.API_NAME;

app.get("/", (req, res) => {
  res.send("Server running!");
});

app.listen(PORT, () => {
  console.log(`${API_NAME || "Portfolio server"} running at ${PORT}`);
});
