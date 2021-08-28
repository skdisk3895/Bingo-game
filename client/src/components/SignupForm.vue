<template>
  <div id="signupApp">
    <div class="signup-box" v-show="toggle">
      <div class="close">
        <i class="fas fa-times" @click="closeSignup()"></i>
      </div>
      <div class="signup">
        <input type="text" placeholder="이름" />
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <input type="password" placeholder="비밀번호 확인" />
        <input type="text" placeholder="휴대폰 번호('-' 제외)" />
        <div class="signup-btn-box">
          <button>회원가입</button>
          <button @click="closeSignup()">취소</button>
        </div>
      </div>
    </div>
    <div class="shadow" v-show="toggle"></div>
  </div>
</template>

<script>
export default {
  props: ["toggle"],
  methods: {
    closeSignup() {
      this.$emit("close-signup");
    },
  },
};
</script>

<style>
.signup-box {
  width: 700px;
  height: 600px;
  padding: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #1a1919;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow-y: hidden;
  z-index: 2;
}

.signup-box .close {
  text-align: right;
  margin-bottom: 50px;
  color: white;
  font-size: 20px;
}

.signup-box .close i {
  cursor: pointer;
}

.signup-box .close i:hover {
  color: #a02d6c;
}

.signup-box .signup {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.signup input {
  width: 500px;
  height: 50px;
  margin: 10px 0;
  padding: 15px;
  font-size: 20px;
  border-radius: 20px;
  border: 3px solid #a02d6c;
  background-color: #1a1919;
  color: white;
}

.signup input:focus {
  outline: none;
}

.signup-btn-box {
  margin-top: 30px;
}

.signup-btn-box button {
  width: 200px;
  height: 50px;
  font-size: 20px;
  border-radius: 20px;
  border: 3px solid #a02d6c;
  background-color: #1a1919;
  color: white;
  margin: 0 30px;
  cursor: pointer;
}

.signup-btn-box button:hover {
  background-color: #a02d6c;
}

.shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}
</style>
