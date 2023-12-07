export interface IStore {
    id?: number;
    cat_id: number;
    user_id: number;
    store_logo: string;
    store_title: string;
    shops: []
    store_images: []
    store_reyting: number;
    phone: string;
    saveCount: number;
    location: string;
}