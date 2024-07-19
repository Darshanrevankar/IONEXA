import express from "express";
import { autoController } from "../controller/autoController.js";

const route = express.Router();

route.post('/reg_user', autoController);

export default route;
