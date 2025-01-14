import express from "express";
import {
	getSimilarTvsController,
	getTrendingTvController,
	getTvDetailsController,
	getTvsByCategoryController,
	getTvTrailersController,
} from "../controllers/tv.controller.js";

const router = express.Router();

router.get("/trending", getTrendingTvController);
router.get("/:id/trailers", getTvTrailersController);
router.get("/:id/details", getTvDetailsController);
router.get("/:id/similar", getSimilarTvsController);
router.get("/:category", getTvsByCategoryController);

export default router;