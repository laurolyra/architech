import architectRoutes from "./routes/architects";
import clientRoutes from "./routes/clients";
import ticketRoutes from "./routes/tickets";

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
app.use("/api/clients", clientRoutes);
app.use("/api/tickets", ticketRoutes);

module.exports = app;
