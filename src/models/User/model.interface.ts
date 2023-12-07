export interface IUser {
    id?: number;
    username: String;
    email: String;
    password: String;
    role: 'product_admin' | 'user_admin';
}
