import express from "express";
import {
	getSearchHistoryController,
	removeItemFromSearchHistoryController,
	searchMovieController,
	searchPersonController,
	searchTvController,
} from "../controllers/search.controller.js";

const router = express.Router();

router.get("/person/:query", searchPersonController);
router.get("/movie/:query", searchMovieController);
router.get("/tv/:query", searchTvController);

router.get("/history", getSearchHistoryController);

router.delete("/history/:id", removeItemFromSearchHistoryController);

export default router;