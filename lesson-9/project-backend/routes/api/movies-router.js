import express from "express";

import moviesControllers from "../../controllers/movies-controllers.js";

import moviesSchemas from "../../schemas/movies-schemas.js";

import {validateBody} from "../../decorators/index.js";

import {authenticate, upload, isValidId} from "../../middlewares/index.js";

const moviesRouter = express.Router();

moviesRouter.use(authenticate);

moviesRouter.get("/", moviesControllers.getAll);

moviesRouter.get("/:id", isValidId, moviesControllers.getById);

// upload.fields([{name: "poster", maxCount: 1}])
// upload.array("poster", 8)
moviesRouter.post("/", upload.single("poster"), validateBody(moviesSchemas.movieAddSchema), moviesControllers.add);

moviesRouter.put("/:id", isValidId, validateBody(moviesSchemas.movieAddSchema), moviesControllers.updateById);

moviesRouter.patch("/:id/favorite", isValidId, validateBody(moviesSchemas.movieUpdateFavoriteSchema), moviesControllers.updateFavorite);

moviesRouter.delete("/:id", isValidId, moviesControllers.deleteById)

export default moviesRouter;