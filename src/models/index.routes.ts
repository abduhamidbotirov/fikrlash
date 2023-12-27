import express from "express";
import postRouter from "./Post/model.routes.js"
import commentRouter from "./PostComment/model.routes.js"
const router = express.Router();
router.use('/test', () => { });
router.use('/posts', postRouter);
router.use('/comments', commentRouter);
export default router