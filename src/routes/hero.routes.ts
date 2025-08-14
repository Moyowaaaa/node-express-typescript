import express from "express";
import type { Request, Response, Express, Router } from "express";

import {
  createHero,
  deleteHero,
  getAllHeroes,
  getSingleHero,
  updateHero,
} from "../controller/hero.controller";

const router = express.Router() as Router;

//get all heroes
router.get("/", getAllHeroes);

//get single
router.get("/:id", getSingleHero);

//create hero
router.post("/", createHero);

//update hero
router.put("/:id", updateHero);

//delete hero
router.delete("/:id", deleteHero);

export default router;
