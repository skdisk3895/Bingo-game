import { instance } from "../index.js";

function requestSignup(userInfo) {
  return instance.post("auth/signup", userInfo);
}

export { requestSignup };
