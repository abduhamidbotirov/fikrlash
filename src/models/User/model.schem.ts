import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../../db/localSequelize.js';
import { IUser } from './model.interface.js';
// IUser interfaceni təyin edirik
export default sequelize.define<Model<IUser>>(
    'users',
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 15],
                    msg: 'Your name must be between 3 and 15 characters long.'
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 20],
                    msg: 'Password must be between 6 and 20 characters long.',
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [6, 20],
                    msg: 'Password must be between 6 and 20 characters long.',
                },
            },
        },
        role: {
            type: DataTypes.ENUM('product_admin', 'user_admin'),
            allowNull: false,
        }
    }
);
