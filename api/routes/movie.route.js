import express from "express";
import {
	getTrendingMovieController,getMovieTrailersController,
	getMovieDetailsController,getSimilarMoviesController,
	getMoviesByCategoryController
} from "../controllers/movie.controller.js";

const router = express.Router();

router.get("/trending", getTrendingMovieController);
router.get("/:id/trailers", getMovieTrailersController);
router.get("/:id/details", getMovieDetailsController);
router.get("/:id/similar", getSimilarMoviesController);
router.get("/:category", getMoviesByCategoryController);

export default router;