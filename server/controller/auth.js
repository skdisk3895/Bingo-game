const express = require("express");
const router = express.Router();

// 회원가입
router.post("/signup", (req, res) => {
    console.log(req.body);
});

// 로그인
router.post("/login", (req, res) => {
    res.render("login");
});

module.exports = router;