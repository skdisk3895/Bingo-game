<template>
  <div>
    <div class="signup" v-show="toggle">
        <div>

        <i class="fas fa-times"></i>
        </div>
      <input type="text" placeholder="이름">
      <input type="text" placeholder="아이디">
      <input type="text" placeholder="비밀번호">
      <input type="text" placeholder="비밀번호 확인">
      <input type="text" placeholder="휴대폰 번호('-' 제외)">
      <button>회원가입</button>
      <button>취소</button>
    </div>
    <div class="shadow" v-show="toggle"></div>
  </div>
</template>

<script>
export default {
    props: [
        "toggle"
    ]
}
</script>

<style>
.signup {
    width: 30vw;
    height: 60vh;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 5px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    z-index: 2;
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