import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";

import dotenv from "dotenv";

dotenv.config();


import globalRouter from "./routers/globalRouters";
import userRouter from "./routers/userRouters";
import videoRouter from "./routers/videoRouters";

import routes from "./routes";
import { localsMiddleware } from "./middlewares";

import "./passport";

const app = express();

console.log(process.env.COOKIE_SECRET);

app.set('view engine',"pug");
app.use(cookieParser());
app.use(cookieParser('secret'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));
app.use(helmet());
app.use(morgan("dev"));

app.use(
    session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true
})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);

app.use("/", globalRouter);
app.use("/", userRouter);
app.use("/", videoRouter);

export default app;

