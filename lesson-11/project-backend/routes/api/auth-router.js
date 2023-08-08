import express from "express";

import authControllers from "../../controllers/auth-controllers.js";

import usersSchemas from "../../schemas/users-schemas.js";

import {validateBody} from "../../decorators/index.js";

import {authenticate} from "../../middlewares/index.js";

const authRouter = express.Router();

authRouter.post("/signup", validateBody(usersSchemas.userSignupSchema), authControllers.signup);

authRouter.get("/verify/:verificationCode", authControllers.verify);

authRouter.post("/verify", validateBody(usersSchemas.userEmailSchema), authControllers.resendVerifyEmail);

authRouter.post("/signin", validateBody(usersSchemas.userSigninSchema), authControllers.signin);

authRouter.get("/current", authenticate, authControllers.getCurrent);

authRouter.post("/signout", authenticate, authControllers.signout);

export default authRouter;