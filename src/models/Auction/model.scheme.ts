import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../../db/localSequelize.js';
import { IAuction } from './model.interface.js';
const Auction = sequelize.define<Model<IAuction>>(
    'auctions',
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
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img_link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        start_price: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        bids: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        last_bid: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        dueto: {
            type: DataTypes.BIGINT,
            allowNull: false,
        }
    }
);
export default Auction;