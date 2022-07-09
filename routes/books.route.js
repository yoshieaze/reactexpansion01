import express from "express";
import { getResult } from "../controllers/books.controller.js";

export const booksRouter = express.Router();

booksRouter.get("/", (req, res) => getResult(req, res));