const request = require("supertest");
const app = require("../app"); 

describe("Calculator API", () => {

  describe("GET /calculator/add", () => {
    it("should add two numbers", async () => {
      const res = await request(app).get("/calculator/add?num1=5&num2=3");
      expect(res.statusCode).toBe(200);
      expect(res.body.result).toBe(8);
    });
  });

  describe("GET /calculator/subtract", () => {
    it("should subtract two numbers", async () => {
      const res = await request(app).get("/calculator/subtract?num1=10&num2=4");
      expect(res.statusCode).toBe(200);
      expect(res.body.result).toBe(6);
    });
  });

  describe("GET /calculator/multiply", () => {
    it("should multiply two numbers", async () => {
      const res = await request(app).get("/calculator/multiply?num1=7&num2=6");
      expect(res.statusCode).toBe(200);
      expect(res.body.result).toBe(42);
    });
  });

  describe("GET /calculator/divide", () => {
    it("should divide two numbers", async () => {
      const res = await request(app).get("/calculator/divide?num1=20&num2=4");
      expect(res.statusCode).toBe(200);
      expect(res.body.result).toBe(5);
    });

    it("should return error when dividing by zero", async () => {
      const res = await request(app).get("/calculator/divide?num1=20&num2=0");
      expect(res.statusCode).toBe(400);
      expect(res.body.error).toBe("Cannot divide by zero");
    });
  });

});
