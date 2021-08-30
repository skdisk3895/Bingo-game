const mysql = require("mysql");
const dbInfo = require("../config/configDB.json");

function connectMySQL() {
    return mysql.createConnection(dbInfo);
}

module.exports.connectMySQL = connectMySQL;