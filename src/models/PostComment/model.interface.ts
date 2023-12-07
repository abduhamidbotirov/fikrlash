export interface IPostComment {
    id?: number;
    user_id: number;
    post_id: number;
    content: string;
    createAt?: Date;
}