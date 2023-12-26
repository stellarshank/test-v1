import { Router } from "express";
import { getAllPrompts } from "../controller/prompt.controller";

const router = Router();

router.get("/prompts", getAllPrompts);

export {router};