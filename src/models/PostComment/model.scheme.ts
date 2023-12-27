import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../db/localSequelize.js';
import { IPostComment } from './model.interface.js';
const PostComment = sequelize.define<Model<IPostComment>>(
    'comments',
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        post_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }
);
export default PostComment;