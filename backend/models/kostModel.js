import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Kost = db.define('kost',{
    nama:{
        type: DataTypes.STRING
    },
    alamat:{
        type: DataTypes.STRING
    },
    panjang:{
        type: DataTypes.INTEGER
    },
    lebar:{
        type: DataTypes.INTEGER
    },
    fasilitas:{
        type: DataTypes.STRING
    },
    harga:{
        type: DataTypes.FLOAT
    }
},{
    freezeTableName: true
});
 
export default Kost;