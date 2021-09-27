const con = require("../repository/mysql").connectMySQL();

function selectSpecificID(userId) {
  const sql = "SELECT * FROM USERS WHERE user_id = ?";
  return new Promise((resolve, reject) => {
    con.query(sql, [userId], (err, result, fileds) => {
      if (err) throw err;
      resolve(result.length);
    });
  });
}

function insertUser(userInfo) {
  const { userId, password, salt, email } = userInfo;
  const sql = `INSERT INTO USERS (user_id, password, salt, email) 
                VALUES (?, ?, ?, ?)`;
  return new Promise((resolve, reject) => {
    con.query(sql, [userId, password, salt, email], (err, result, fileds) => {
      if (err) throw err;
      resolve(result);
    });
  });
}

module.exports.selectSpecificID = selectSpecificID;
module.exports.insertUser = insertUser;
