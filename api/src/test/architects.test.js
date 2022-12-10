const request = require("supertest");
const app = require("../app");

describe("/architects route", () => {
  test("It should response the GET method", async () => {
    await request(app)
      .get("/")
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.error).toBe(false);
      });
  });
});
