import User from "../models/users";
import Prompt from "../models/prompts";
import { Request, Response } from "express";

// get all prompts
export const getAllPrompts = async (req: Request, res: Response) => {
  try {
    const prompts = await Prompt.find({}).populate("creator");
    res.status(200).json(prompts);
  } catch (error: String | any) {
    console.log(error);

    return res.status(500).json({ error: error.message });
  }
};

// create a prompt
export const createPrompt = async (req: Request, res: Response) => {
  const { userId, prompt, tag } = req.body;
  try {
    const newPrompt = new Prompt({ creator: userId, prompt, tag });
    await newPrompt.save();
    return res.status(201).json(newPrompt);
  } catch (error: String | any) {
    return res.status(500).json({ error: error.message });
  }
};

// GET post by ID for logged in user
export const getPostLoggedUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const prompts = await Prompt.find({ creator: id }).populate("creator");
    return res.status(200).json(prompts);
  } catch (error: String | any) {
    return res.status(500).json({ error: error.message });
  }
};
