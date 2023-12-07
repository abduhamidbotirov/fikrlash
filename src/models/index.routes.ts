import express from "express";
import userRoutes from './User/model.routes.js';
const router = express.Router();
router.use('/test', () => { });
router.use('/user', userRoutes);
export default router