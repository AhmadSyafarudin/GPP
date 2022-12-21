import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Users = db.define('user',{
    refresh_token:{
        type: DataTypes.STRING
    },
    username:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    role:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName: true
});
 
export default Users;