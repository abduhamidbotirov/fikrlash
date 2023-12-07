import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../../db/localSequelize.js';
import { IStoreComment } from './model.interface.js';
// IUser interfaceni təyin edirik
const StoreComment = sequelize.define<Model<IStoreComment>>(
    'storecomments',
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
        store_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        stars: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }
);
export default StoreComment