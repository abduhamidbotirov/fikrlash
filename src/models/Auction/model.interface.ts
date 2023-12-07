export interface IAuction {
    id?: number;
    title: string;
    img_link: string;
    desc: string
    start_price: number;
    dueto: number;
    bids: number;
    last_bid: number;
    user_id: number;
    role: string;
}
