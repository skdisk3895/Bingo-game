const express = require("express");
const router = express.Router();
const authService = require("../service/authService");

// 아이디 중복 체크
router.post("/checkid", async (req, res) => {
  //   const userId = req.body.user_id;
  const authCheck = new authService.AuthCheck(req.body);
  res.json({ result: await authCheck.checkIdDuplication() });
});

// 인증번호 전송
router.post("/certification", (req, res) => {
  const phoneNumber = req.body.phone;
});

// 회원가입 Request에 대핸 Response
router.post("/signup", async (req, res) => {
  const authCheck = new authService.AuthCheck(req.body);
  if (!authCheck.checkIDValidation()) res.json({ result: "ID Validation error!", errorCode: 100 });
  if (await authCheck.checkIdDuplication()) res.json({ result: "Already existed", errorCode: 200 });
  if (!authCheck.checkPasswordValidation()) res.json({ result: "Password validation error!", errorCode: 101 });
  if (!authCheck.checkEqualPassword()) res.json({ result: "Not same password", errorCode: 102 });
  if (!authCheck.checkEmailValidation()) res.json({ result: "Email validation error!", errorCode: 103 });
  res.json({ result: "Signup Success" });
});

// 로그인 Request에 대핸 Response
router.post("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
