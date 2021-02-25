import authRouter from "./router";
import {Router} from "express";

const router = Router();
router.use('/auth', authRouter);

const authModule = {
    init: (app) => {
        app.use(router);
        console.log("Auth module loaded");
    },
}

export default authModule;
