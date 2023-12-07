export interface IStoreComment {
    id?: number;
    content: string
    user_id: number;
    stars: number
    createAt?: Date;
    store_id: number
}
