import type { NextFunction, Request, Response } from "express";
import Hero from "../models/hero.model";
import { IHero } from "../interfaces/hero.interface";
import { IError } from "../interfaces/error.interface";

//get all heroes
export const getAllHeroes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const limit = Number(req.query.limit);
    const heroes = await Hero.find();
    if (!isNaN(limit) && limit > 0) {
      return res.status(200).json(heroes.slice(0, limit));
    }
    res.status(200).json(heroes);
  } catch (error) {
    let err: IError = new Error();
    err.status = 404;
    err.message = "An error occurred";
    return next(err);
  }
};

// get single hero
export const getSingleHero = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const hero = await Hero.findById(id);
    if (!hero) {
      let err: IError = new Error();
      err.status = 404;
      err.message = `No hero with id:${id} found`;
      return next(err);
    }
    res.status(200).json(hero);
  } catch (error) {
    let err: IError = new Error();
    err.status = 404;
    err.message = "An error occurred";
    return next(err);
  }
};

//create post
export const createHero = async (
  req: Request<{}, {}, IHero>,
  res: Response,
  next: NextFunction
) => {
  try {
    const hero = await Hero.create(req.body);
    res.status(201).json(hero);
  } catch (error) {
    let err: IError = new Error();
    err.status = 404;
    err.message = "An error occurred";
    return next(err);
  }
};

//update hero

export const updateHero = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const hero = await Hero.findByIdAndUpdate(id, req.body);
    if (!hero) {
      let err: IError = new Error();
      err.status = 404;
      err.message = `No hero with id:${id} found`;
      return next(err);
    }
    const updatedHero = await Hero.findById(id);
    res.status(200).json(updatedHero);
  } catch (error) {
    let err: IError = new Error();
    err.status = 500;
    err.message = "An error occurred";
    return next(err);
  }
};

//delete hero

export const deleteHero = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const hero = await Hero.findByIdAndDelete(id);
    if (!hero) {
      let err: IError = new Error();
      err.status = 404;
      err.message = `No hero with id:${id} found`;
      return next(err);
    }
    res.status(200).json({ message: "Hero Successfully deleted" });
  } catch (error) {
    res.status(404).json({ message: "An error occurred" });
    let err: IError = new Error();
    err.status = 500;
    err.message = `An error occurred`;
    return next(err);
  }
};
