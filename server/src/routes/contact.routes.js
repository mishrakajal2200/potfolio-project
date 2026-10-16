
import express from "express";
import { submitContact } from "../controllers/contact.controllers.js";

const router = express.Router();

router.post("/", submitContact);

export default router;
