import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../../db/localSequelize.js';
import { IPostCategory } from './model.interface.js';
import { minLength } from 'class-validator';
// IUser interfaceni təyin edirik
const PostCategory = sequelize.define<Model<IPostCategory>>(
    'postcategorys',
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        cat_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }
);
export default PostCategory;