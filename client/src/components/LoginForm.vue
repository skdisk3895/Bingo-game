<template>
  <div class="login-box">
    <div class="login-form">
      <div class="input-form">
        <input type="text" />
        <input type="password" />
      </div>
      <div class="login-btn">
        <button>Login</button>
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
    openSignupModal: function () {
      this.$emit("open-signup");
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
  background-color: #1a1919;
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
  border: 3px solid #a02d6c;
  background-color: #1a1919;
  color: white;
}

.login-form input:focus {
  outline: none;
  border: 3px solid #28155f;
}

.login-form .login-btn button {
  border: 3px solid #a02d6c;
  border-radius: 10px;
  background-color: #1a1919;
  margin-left: 10px;
  width: 120px;
  height: 120px;
  font-size: 35px;
  color: #ffffff;
  cursor: pointer;
}

.links {
  margin-top: 10px;
}

.signup-link,
.password-link {
  padding: 10px;
  margin: 0 10px;
  border: 3px solid #a02d6c;
  border-radius: 20px;
  background-color: #1a1919;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
}

.login-form .login-btn button:hover,
.signup-link:hover,
.password-link:hover {
  background-color: #a02d6c;
}
</style>
