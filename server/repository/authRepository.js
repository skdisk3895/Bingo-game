const con = require("../repository/mysql").connectMySQL();

function selectSpecificID(userId) {
    const sql = "SELECT * FROM USERS WHERE user_id = ?";
    return new Promise((resolve, reject) => {
        con.query(sql, [userId], (err, result, fileds) => {
            if (err) throw err;
            resolve(result.length);
        })
    })
}

module.exports.selectSpecificID = selectSpecificID;