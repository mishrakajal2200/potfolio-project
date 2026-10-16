
import { describe, it, expect, beforeAll, afterAll } from "vitest";
import request from "supertest";
import mongoose from "mongoose";
import app from "../src/app.js";
import { connectDB } from "../src/config/db.js";

describe("Project API", () => {
  beforeAll(async () => {
    await connectDB();
  }, 15000);

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("should return the list of projects", async () => {
    const response = await request(app)
      .get("/api/projects");

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toBeInstanceOf(Array);
  });

  it("should reject invalid project data", async () => {
    const response = await request(app)
      .post("/api/projects")
      .set("Authorization", "Bearer invalid-test-token")
      .send({
        title: "",
      });

    expect(response.status).toBe(401);
  });
});
