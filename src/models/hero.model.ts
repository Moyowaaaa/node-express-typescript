import mongoose, { Mongoose, Schema } from "mongoose";
import { IHero } from "../interfaces/hero.interface";

const heroSchema = new Schema<IHero>(
  {
    name: {
      type: String,
      required: false,
    },
    alias: {
      type: String,
      required: true,
    },
    powers: {
      type: [String],
      required: false,
    },
  },
  { timestamps: true }
);

const Hero = mongoose.model("Hero", heroSchema);

export default Hero;
