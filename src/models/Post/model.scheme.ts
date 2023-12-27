import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../../db/localSequelize.js';
import { IPost } from './model.interface.js';
const Post = sequelize.define<Model<IPost>>(
    'posts',
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        img: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    }
);
export default Post; 