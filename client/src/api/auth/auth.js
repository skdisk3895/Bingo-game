import { instance } from "../index.js";

function requestSignup(userInfo) {
  return instance.post("auth/signup", userInfo);
}

function requestEmailCertification(emailData) {
  return instance.post("auth/emailcertification", emailData);
}

export { requestSignup, requestEmailCertification };
