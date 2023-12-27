// user.routes.ts
import { Router } from 'express';
import workContr from './model.controller.js';
const router = Router();
router.post('/', workContr.createPost);
router.get('/', workContr.getPosts)
router.get('/:id', workContr.getPost)
router.put('/', workContr.updatePost)
router.delete('/', workContr.deletePost)
export default router;
