import express from "express";

import moviesControllers from "../../controllers/movies-controllers.js";

import moviesSchemas from "../../schemas/movies-schemas.js";

import {validateBody} from "../../decorators/index.js";

const moviesRouter = express.Router();

moviesRouter.get("/", moviesControllers.getAll)

// moviesRouter.get("/:id", moviesControllers.getById)

// moviesRouter.post("/", validateBody(moviesSchemas.movieAddSchema), moviesControllers.add)

// moviesRouter.put("/:id", validateBody(moviesSchemas.movieAddSchema), moviesControllers.updateById)

// moviesRouter.delete("/:id", moviesControllers.deleteById)

export default moviesRouter;