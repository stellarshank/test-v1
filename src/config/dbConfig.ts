import mongoose, { ConnectOptions } from "mongoose";
import User from "../models/users";
import * as dotenv from "dotenv";

dotenv.config();

mongoose.Promise = global.Promise;

const mongouri: string = process.env.MONGODB_URI as string;

const dbOptions = {
  useNewUrlParser: true,
  dbName: "share_prompt",
} as ConnectOptions;

export const connectDb = () => {
  mongoose
    .connect(mongouri, dbOptions)
    .then(() => {
      console.log("Database Connected Successfully!!");
    })
    .catch((err) => {
      console.error("Could not connect to the database", err);
      process.exit(1);
    });
};
