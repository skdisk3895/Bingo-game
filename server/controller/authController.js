const express = require("express");
const router = express.Router();
const authService = require("../service/authService")

// 아이디 중복 체크
router.post("/checkid", async (req, res) => {
    const userId = req.body.user_id;
    const authCheck = new authService.AuthCheck(userId);
    res.json({result: await authCheck.checkIdDuplication()});
})

// 인증번호 전송
router.post("/certification", (req, res) => {
    const phoneNumber = req.body.phone;

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