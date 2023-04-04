const request = require("supertest")
const baseURL = "http://localhost:8000"

require("dotenv").config();

describe("GET /orders", () => {
    it("should return all products", async () => {
      const res = await request(baseURL).get("/orders");
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });