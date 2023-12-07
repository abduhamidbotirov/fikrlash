import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../../db/localSequelize.js';
import { IStroeCategory } from './model.interface.js';
const StoreCategory = sequelize.define<Model<IStroeCategory>>(
    'storecategorys',
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        cat_name: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        stores: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
    }
);
export default StoreCategory;