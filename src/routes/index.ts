import express from "express";
import type { Request, Response, Express, Router } from "express";
import heroRoutes from "./hero.routes";

const router = express.Router() as Router;

router.use("/", heroRoutes);

export default router;
