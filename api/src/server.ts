const mainApp = require("./app");
const port = 8001;

mainApp.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
