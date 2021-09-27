const authRepository = require("../repository/authRepository");
const crypto = require("crypto");

// 회원가입 할 때 validation 체크
class AuthCheck {
  constructor(userInfo = {}) {
    this.userId = userInfo.user_id || "";
    this.password = userInfo.password || "";
    this.passwordConfirm = userInfo.password_confirm || "";
    this.email = userInfo.email || "";
  }

  // 아이디 중복 체크
  async checkIdDuplication() {
    const result = await authRepository.selectSpecificID(this.userId);
    return new Promise((resolve, reject) => {
      resolve(result);
    });
  }

  // 아이디 유효성 체크 (only 영문자 or 영문자 + 숫자조합, 최소 6자이상)
  checkIDValidation() {
    // 아이디 길이가 6자보다 작거나 첫 글자가 영어가 아닐 경우
    if (this.userId.length < 6 || this.userId[0] < "A" || this.userId[0] > "z") return false;
    return true;
  }

  // 비밀번호 유효성 체크 (최소 8자 특수문자 (!, @, #, $, %, ^ 만 허용))
  checkPasswordValidation() {
    // 허용되는 특수문자
    const specialChars = ["!", "@", "#", "$", "%", "^"];

    // 길이가 8자보다 작은경우
    if (this.password < 8) return false;

    // 허용되지않는 특수문자가 존재할 경우
    this.password.split("").forEach((char) => {
      if (!specialChars.some((sc) => sc === char)) return false;
    });

    return true;
  }

  // password === password confirm 체크
  checkEqualPassword() {
    return this.password === this.passwordConfirm;
  }

  // 이메일 유효성 체크
  checkEmailValidation() {
    console.log("email : ", this.email);
    const reg_email = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return !reg_email.test(this.email) ? false : true;
  }
}

class EmailCertification extends AuthCheck {
  generateRandomNumber() {
    let randomNumber = "";
    for (let i = 0; i < 6; i++) randomNumber += Math.floor(Math.random() * 10);

    return randomNumber;
  }
}

// 비밀번호 암호화
class PasswordEncryption {
  constructor(password, salt) {
    this.password = password;
    this.salt = salt;
  }
}

// 회원가입, 로그인
class Auth {
  constructor(userInfo) {
    this.userInfo = userInfo;
  }

  async signup() {
    const result = await authRepository.insertUser(this.userInfo);
    return new Promise((resolve, reject) => {
      resolve(result);
    });
  }

  login() {}
}

module.exports.AuthCheck = AuthCheck;
module.exports.PasswordEncryption = PasswordEncryption;
module.exports.Auth = Auth;
module.exports.EmailCertification = EmailCertification;
