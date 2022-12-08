import architectRoutes from "./routes/architects";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (_req: any, res: any) => {
  res.status(200).send("Hello World!");
});

app.use("/api/architects", architectRoutes);

module.exports = app;
