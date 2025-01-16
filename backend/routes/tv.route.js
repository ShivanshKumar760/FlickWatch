import express from "express";
import {
	getSimilarTvs,
	getTrendingTv,
	getTvDetails,
	getTvsByCategory,
	getTvTrailers,
	getTvEpisodeList
} from "../controllers/tv.controller.js";

const router = express.Router();

router.get("/trending", getTrendingTv);
router.get("/:id/trailers", getTvTrailers);
router.get("/:id/details", getTvDetails);
router.get("/:id/similar", getSimilarTvs);
router.get("/:category", getTvsByCategory);
router.get("/:id/season/:season",getTvEpisodeList);

export default router;
