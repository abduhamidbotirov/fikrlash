import { Request, Response } from 'express';
import handleError from '../../utils/catchError.js';
import workModel from './model.scheme.js';
import { IPost } from './model.interface.js';
import PostComment from '../PostComment/model.scheme.js';
import { uploadImg } from '../../utils/uploadImg.js';
class PostCatController {
    public static async createPost(req: Request, res: Response): Promise<void> {
        try {
            const { title, description }: IPost = req.body;
            let img: string | null = null;

            const uploadedImg = await uploadImg(req, res, title);
            // console.log('uploadedImg :', uploadedImg);

            if (typeof uploadedImg === 'string') {
                img = uploadedImg;
            }
            const post = await workModel.create({ title, description, img: img ? img : null });
            res.status(201).json(post);
        } catch (error: any) {
            handleError(res, error);
        }
    }
    public static async getPosts(req: Request, res: Response): Promise<void> {
        try {
            const posts = await workModel.findAll()
            res.status(200).json(posts);
        } catch (error: any) {
            handleError(res, error);
        }
    }
    public static async getPost(req: Request, res: Response): Promise<void> {
        try {
            const postId = Number(req.params.id);
            const post = await workModel.findByPk(postId, {
                include: [{ model: PostComment }],
            });
            if (!post) {
                res.status(404).json({ message: 'Post tapılmadı' });
                return;
            }
            res.status(200).json(post);
        } catch (error: any) {
            handleError(res, error);
        }
    }
    public static async updatePost(req: Request, res: Response): Promise<void> {
        try {
            const postId = Number(req.params.id);
            const postData: IPost = req.body;
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
export default PostCatController;
