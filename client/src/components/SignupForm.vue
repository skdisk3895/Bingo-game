<template>
  <div id="signupApp">
    <div class="signup-box" v-show="toggle">
      <div class="close">
        <i class="fas fa-times" @click="closeSignup()"></i>
      </div>
      <div class="signup">
        <div class="id">
          <div>
            <input type="text" placeholder="아이디" spellcheck="false" ref="user_id" />
            <button class="check-repeat" @click="checkRepeatID()">중복확인</button>
          </div>
          <p v-show="idCheck === 0">사용 가능한 아이디입니다.</p>
          <p v-show="idCheck === 1">이미 존재하는 아이디입니다.</p>
        </div>
        <input type="password" placeholder="비밀번호" ref="password" />
        <input type="password" placeholder="비밀번호 확인" ref="password_confirm" />
        <div class="phone">
          <div>
            <input type="text" placeholder="휴대폰 번호('-' 제외)" spellcheck="false" ref="user_id" />
            <button class="check-repeat" @click="requestCertification()">인증번호 전송</button>
          </div>
          <p v-show="idCheck === 0">사용 가능한 아이디입니다.</p>
          <p v-show="idCheck === 1">이미 존재하는 아이디입니다.</p>
        </div>
        <div class="phone-certification" v-if="isSendCertification">
          <input type="text" placeholder="인증번호" spellcheck="false" ref="user_id" />
          <div class="certification-timer">
            <span>{{ minutes }}</span>
            <span>분</span>
            <span>{{ seconds }}</span>
            <span>초</span>
          </div>
        </div>
        <div class="signup-btn-box">
          <button @click="requestSignup()">회원가입</button>
          <button @click="closeSignup()">취소</button>
        </div>
      </div>
    </div>
    <div class="shadow" v-show="toggle"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["toggle"],
  created() {
    this.countDownTimer();
  },
  computed: {
    minutes() {
      return parseInt(this.countDown / 60);
    },
    seconds() {
      return this.countDown % 60;
    },
  },
  data() {
    return {
      idCheck: -1,
      countDown: 181,
      isSendCertification: false,
    };
  },
  methods: {
    // 아이디 중복확인 이벤트
    checkRepeatID() {
      if (!this.$refs["user_id"].value) return;
      axios
        .post("http://localhost:3000/auth/checkid", {
          user_id: this.$refs["user_id"].value,
        })
        .then((res) => {
          this.idCheck = res.data.result;
        })
        .catch((err) => console.log(err));
    },
    resetInput() {
      Object.entries(this.$refs).forEach((input) => (input[1].value = ""));
    },
    closeSignup() {
      this.$emit("close-signup");
      this.resetInput();
      this.idCheck = -1;
      this.countDown = 181;
      this.isSendCertification = false;
    },
    requestSignup() {
      console.log(this.$refs["password_confirm"].value);
      axios
        .post("http://localhost:3000/auth/signup", {
          name: this.$refs["name"].value,
          user_id: this.$refs["user_id"].value,
          password: this.$refs["password"].value,
          password_confirm: this.$refs["password_confirm"].value,
          phone: this.$refs["phone"].value,
        })
        .then((res) => {
          this.idCheck = res.data.result;
        })
        .catch((err) => console.log(err));
    },
    // 인증번호 관련
    // 인증번호 전송 이벤트
    requestCertification() {
      this.isSendCertification = true;
    },
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      }
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
  background-color: #000000;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow-y: hidden;
  z-index: 2;
}

.signup-box .close {
  text-align: right;
  margin-bottom: 50px;
  color: rgb(219, 129, 26);
  font-size: 20px;
}

.signup-box .close i {
  cursor: pointer;
}

.signup-box .close i:hover {
  color: #28155f;
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
  border: 3px solid #28155f;
  background-color: #000000;
  color: rgb(219, 129, 26);
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
  border: 3px solid #28155f;
  background-color: #000000;
  color: rgb(219, 129, 26);
  margin: 0 30px;
  cursor: pointer;
}

.signup-btn-box button:hover {
  background-color: #28155f;
}

.shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}

.id div,
.phone div,
.phone-certification,
.certification-timer {
  display: flex;
}

.id input {
  width: 380px;
  margin-right: 20px;
}

.id button,
.phone button {
  width: 100px;
  height: 50px;
  margin-top: 10px;
  font-size: 15px;
  border-radius: 20px;
  border: 3px solid #28155f;
  background-color: #000000;
  color: rgb(219, 129, 26);
  cursor: pointer;
}

.phone button {
  font-size: 13px;
  padding: 5px;
}

.id button:hover,
.phone button:hover {
  background-color: #28155f;
}

.phone input {
  width: 380px;
  margin-right: 20px;
}

.phone-certification input {
  width: 300px;
  border-right: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.certification-timer {
  width: 200px;
  border: 3px solid #28155f;
  border-left: 0;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px 0;
}

p,
span {
  color: rgb(219, 129, 26);
}
</style>
