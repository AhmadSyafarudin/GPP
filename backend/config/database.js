import { Sequelize } from "sequelize";
 
const db = new Sequelize('kost_hunt', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;