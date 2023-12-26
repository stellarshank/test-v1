/**
 * Required External Modules
 */
import { connectDb } from "./config/dbConfig";
import * as dotenv from "dotenv";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { router } from "./routes/promptsRoutes";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */
if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cors());

app.use(express.json());

app.use("/api", router);

/**
 * Server Activation
 */
connectDb();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello there the server is running just fine." });
});
