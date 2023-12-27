import { Request, Response } from 'express';
import handleError from '../../utils/catchError.js';
import { IPostComment } from './model.interface.js';
import workModel from './model.scheme.js';
class PostCommentController {
    public static async createPost(req: Request, res: Response): Promise<void> {
        try {
            const { post_id, content }: IPostComment = req.body;
            const post = await workModel.create({ post_id, content });
            res.status(201).json(post);
        } catch (error: any) {
            handleError(res, error);
        }
    }
    public static async updatePost(req: Request, res: Response): Promise<void> {
        try {
            const postId = Number(req.params.id);
            const postData: IPostComment = req.body;
            const post = await workModel.findByPk(postId);
            if (!post) {
                res.status(404).json({ message: 'Post tapılmadı' });
                return;
            }
            Object.assign(post, postData); // Yeniləmək üçün obyektin xüsusiyyətlərini əvəz edirik
            await post.save();
            res.status(200).json(post);
        } catch (error: any) {
            handleError(res, error);
        }
    }
    public static async deletePost(req: Request, res: Response): Promise<void> {
        try {
            const postId = Number(req.params.id);
            const post = await workModel.findByPk(postId);
            if (!post) {
                res.status(404).json({ message: 'Post tapılmadı' });
                return;
            }
            await post.destroy();
            res.status(204).send();
        } catch (error: any) {
            handleError(res, error);
        }
    }
}
export default PostCommentController;
