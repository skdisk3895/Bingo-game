const express = require("express");
const router = express.Router();
const authService = require("../service/authService");

// 인증번호 전송
router.post("/emailcertification", (req, res) => {
  const emailCheck = new authService.EmailCertification(req.body);

  if (!emailCheck.checkEmailValidation()) {
    return res.status(400).json({
      message: "Email validation error!",
      errorCode: 400,
    });
  }

  return res.status(201).json({
    message: "Send success",
    code: emailCheck.generateRandomNumber(),
  });
});

// 입력된 인증번호 체크
router.post("/check/number", (req, res) => {});

// 회원가입 Request에 대핸 Response
router.post("/signup", async (req, res) => {
  console.log(req.body);

  const authCheck = new authService.AuthCheck(req.body);

  if (!authCheck.checkIDValidation()) {
    return res.status(400).json({
      message: "ID Validation error!",
      errorCode: 400,
    });
  }
  if (await authCheck.checkIdDuplication()) {
    return res.status(400).json({
      message: "Already existed",
      errorCode: 400,
    });
  }
  if (!authCheck.checkPasswordValidation()) {
    return res.status(400).json({
      message: "Password validation error!",
      errorCode: 400,
    });
  }
  if (!authCheck.checkEqualPassword()) {
    return res.status(400).json({
      message: "Not same password",
      errorCode: 400,
    });
  }
  if (!authCheck.checkEmailValidation()) {
    return res.status(400).json({
      message: "Email validation error!",
      errorCode: 400,
    });
  }
  if (!req.body.emailCertification) {
    console.log("asdasd");
    return res.status(400).json({
      message: "Email certification error!",
      errorCode: 400,
    });
  }

  // await signup();
  console.log("good");
  return res.status(201).json({ message: "Signup Success" });
});

// 로그인 Request에 대핸 Response
router.post("/login", (req, res) => {
  res.render("login");
});

// 로그아웃
router.post("/logout", (req, res) => {});

module.exports = router;
