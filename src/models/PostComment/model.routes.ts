// user.routes.ts
import { Router } from 'express';
import workContr from './model.controller.js';
const router = Router();
router.post('/', workContr.createPost);
router.put('/', workContr.updatePost)
router.delete('/', workContr.deletePost)
export default router;
