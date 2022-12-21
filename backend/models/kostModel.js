import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Kost = db.define('kost',{
    nama:{
        type: DataTypes.STRING
    },
    user_id:{
        type: DataTypes.INTEGER
    },
    lokasi:{
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
    foto_depan:{
        type: DataTypes.STRING
    },
    foto_dalam:{
        type: DataTypes.STRING
    },
    url1:{
        type: DataTypes.STRING
    },
    url2:{
        type: DataTypes.STRING
    },
    harga:{
        type: DataTypes.FLOAT
    }
},{
    freezeTableName: true
});
 
export default Kost;