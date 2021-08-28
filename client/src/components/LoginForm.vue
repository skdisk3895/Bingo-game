<template>
  <div class="login-box">
    <div class="login-form">
      <div class="input-form">
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
      </div>
      <div class="login-btn">
        <button @click="login()">Login</button>
      </div>
    </div>
    <div class="links">
      <button class="signup-link" @click="openSignupModal()">Go to signup</button>
      <button class="password-link">Find password</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openSignupModal() {
      this.$emit("open-signup");
    },
    login() {
      this.$router.push({ name: "lobby" });
    },
  },
};
</script>

<style>
.login-box {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;
  border-radius: 15px;
  background-color: #000000;
  padding: 30px;
}

.login-form {
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-form .input-form {
  display: flex;
  flex-direction: column;
}

.login-form input {
  width: 400px;
  height: 50px;
  margin: 10px 0;
  padding: 15px;
  font-size: 20px;
  border-radius: 20px;
  border: 3px solid #28155f;
  background-color: #000000;
  color: rgb(219, 129, 26);
}

.login-form input:focus {
  outline: none;
  border: 3px solid #28155f;
}

.login-form .login-btn button {
  border: 3px solid #28155f;
  border-radius: 10px;
  background-color: #000000;
  margin-left: 10px;
  width: 120px;
  height: 120px;
  font-size: 35px;
  color: rgb(219, 129, 26);
  cursor: pointer;
}

.links {
  margin-top: 10px;
}

.signup-link,
.password-link {
  padding: 10px;
  margin: 0 10px;
  border: 3px solid #28155f;
  border-radius: 20px;
  background-color: #000000;
  font-size: 20px;
  color: rgb(219, 129, 26);
  cursor: pointer;
}

.login-form .login-btn button:hover,
.signup-link:hover,
.password-link:hover {
  background-color: #28155f;
}
</style>
