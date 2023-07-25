import express from "express";

import authControllers from "../../controllers/auth-controllers.js";

import usersSchemas from "../../schemas/users-schemas.js";

import {validateBody} from "../../decorators/index.js";

const authRouter = express.Router();

authRouter.post("/signup", validateBody(usersSchemas.userSignupSchema), authControllers.signup);

authRouter.post("/signin", validateBody(usersSchemas.userSigninSchema), authControllers.signin);

export default authRouter;