import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../../db/localSequelize.js';
import { IUser } from './model.interface.js';
import { minLength } from 'class-validator';
// IUser interfaceni təyin edirik
 const User = sequelize.define<Model<IUser>>(
    'users',
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.BIGINT,
            allowNull: true,
        },
        stores_id: {
            type: DataTypes.BIGINT,
            allowNull: true,
        },
        store_saved_id: {
            type: DataTypes.BIGINT,
            allowNull: true,
        },
        bought_post_id: {
            type: DataTypes.BIGINT,
            allowNull: true,
        },
        liked_post_id: {
            type: DataTypes.BIGINT,
            allowNull: true,
        },
    }
);
export default User;