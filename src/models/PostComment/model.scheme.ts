import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../../db/localSequelize.js';
import { IPostComment } from './model.interface.js';
import { minLength } from 'class-validator';
// IUser interfaceni təyin edirik
const PostComment = sequelize.define<Model<IPostComment>>(
    'postcomment',
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
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