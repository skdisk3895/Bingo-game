<template>
  <div id="app">
    <!-- Logo image -->
    <Logo />
    <!-- LoginForm -->
    <LoginForm @open-signup="openSignup()" />
    <!-- Signup modal -->
    <SignupForm :toggle="signupToggle" @close-signup="closeSignup()" />
  </div>
</template>

<script>
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
};
</script>

<style>
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
