import { Request, Response } from "express";
import mongoose from "mongoose";
import app from "./app";

const PORT = process.env.PORT;
const MONGO_URL = process.env.DATABASE_URL;

async function main() {
  try {
    await mongoose.connect(MONGO_URL as string);
    console.log("Database connected successfully.");

    app.listen(PORT, () => {
      console.log(`App listening on  ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
