import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../../db/localSequelize.js';
import { IPost } from './model.interface.js';
const StorePost = sequelize.define<Model<IPost>>(
    'storeposts',
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        store_id: {
            type: DataTypes.ARRAY,
        },
        likeCount: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        price: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img_link: {
            type: DataTypes.STRING,
            allowNull: false
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);
export default StorePost;