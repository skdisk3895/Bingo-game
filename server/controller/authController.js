const express = require("express");
const router = express.Router();
const con = require("../repository/mysql").connectMySQL();


// 아이디 중복 체크
router.post("/checkid", (req, res) => {
    const userId = req.body.user_id;
    console.log(userId)
    const sql = "SELECT * FROM USERS WHERE user_id = ?";
    con.query(sql, [userId], (err, result, fileds) => {
        if (err) throw err;
        res.json({result: result.length});
    })
})

// 회원가입 Request에 대핸 Response
router.post("/signup", (req, res) => {
    console.log(req.body);
    res.json({result: "good"})
});

// 로그인 Request에 대핸 Response
router.post("/login", (req, res) => {
    res.render("login");
});

module.exports = router;