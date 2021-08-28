<template>
  <div id="app">
    <!-- Logo image -->
    <Logo />
    <!-- LoginForm -->
    <LoginForm @open-signup="openSignup()" />
    <!-- Signup modal -->
    <SignupForm :toggle="signupToggle" @close-signup="closeSignup()" />

    <!-- <div class="reset-btn">
      <button @click="reset()">Reset</button>
    </div>
    <Result />
    <div class="boards">
      <Board ref="user_1" :user="1" />
      <Board ref="user_2" :user="2" />
    </div>-->
  </div>
</template>

<script>
// import Board from "@/components/Board.vue";
// import Result from "@/components/Result.vue";
import Logo from "@/components/Logo.vue";
import LoginForm from "@/components/LoginForm.vue";
import SignupForm from "@/components/SignupForm.vue";

export default {
  components: {
    Logo,
    LoginForm,
    SignupForm,
  },
  data() {
    return {
      signupToggle: false,
    };
  },
  methods: {
    openSignup() {
      this.signupToggle = true;
    },
    closeSignup() {
      this.signupToggle = false;
    },
  },
  // components: {
  //   Board,
  //   Result,
  // },
  // methods: {
  //   removeAllColor: function (user) {
  //     Object.entries(this.$refs[user].$refs).forEach(bingo => {
  //       bingo[1][0].classList.remove("active");
  //     })
  //   },
  //   reset: function () {
  //     // UI에서 색칠된 빙고판 색깔 제거
  //     // 1번 유저의 빙고판 색깔 제거
  //     this.removeAllColor("user_1");

  //     // 2번 유저의 빙고판 색깔 제거
  //     this.removeAllColor("user_2");

  //     // vuex state 초기화
  //     this.$store.state.turn = 1;
  //     this.$store.state.finish = false;
  //     this.$store.commit("resetColored");
  //     this.$store.state.winner = 0;
  //   }
  // }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #0c0029;
  overflow: hidden;
}
</style>
