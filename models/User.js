const {Model, Dataypes } = require('sequelize');
const sequelize = require('../config/connection');

//create user model
class User extends Model {}

//define tabler columns and configuration
User.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },  
    email: {
        type: Dataypes.STRING,
        allowNull: false,
        unique: true
    },
// definingp password column
    password: {
        type:Dataypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
    },
    user_id: {
        type: Dataypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    }
},
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'User'
    }
);

module.exports = User;