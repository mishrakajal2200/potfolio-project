
import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../src/app.js";

describe("Contact API", () => {
  it("should reject an empty contact form", async () => {
    const response = await request(app)
      .post("/api/contact")
      .send({});

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
  });
});
