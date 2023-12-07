import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../../db/localSequelize.js';
import { IBids } from './model.interface.js';
// IUser interfaceni təyin edirik
const Bids = sequelize.define<Model<IBids>>(
    'bids',
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
        price: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
    }
);
export default Bids;