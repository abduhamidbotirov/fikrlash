export interface IPost {
    id?: number;
    likeCount: number;
    price: number
    title: string
    desc: string
    img_link: string
    store_id: []
    creatAt?: Date
}