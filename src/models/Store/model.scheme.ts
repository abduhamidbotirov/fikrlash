import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../../db/localSequelize.js';
import { IStore } from './model.interface.js';
const Store = sequelize.define<Model<IStore>>(
    'stores',
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
        cat_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        store_logo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        store_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        shops: {
            type: DataTypes.ARRAY,
            allowNull: false,
        },
        store_images: {
            type: DataTypes.ARRAY,
            allowNull: false,
        },
        store_reyting: {
            type: DataTypes.NUMBER,
            defaultValue: 0,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        saveCount: {
            type: DataTypes.NUMBER,
            defaultValue: 0,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }
);
export default Store;