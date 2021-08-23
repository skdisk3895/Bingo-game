<template>
  <div id="app">
    <div class="reset-btn">
      <button @click="reset()">Reset</button>
    </div>
    <div class="boards">
      <Board ref="user_1" />
      <Board ref="user_2" />
    </div>
    <TurnModal />
  </div>
</template>

<script>
import Board from "@/components/Board.vue";
import TurnModal from "@/components/TurnModal.vue";

export default {
  components: {
    Board,
    TurnModal,
  },
  methods: {
    removeAllColor: function (user) {
      Object.entries(this.$refs[user].$refs).forEach(bingo => {
        bingo[1][0].classList.remove("active");
      })
    },
    reset: function () {
      // UI에서 색칠된 빙고판 색깔 제거

      // 1번 유저의 빙고판 색깔 제거
      this.removeAllColor("user_1");

      // 2번 유저의 빙고판 색깔 제거
      this.removeAllColor("user_2");
    }
  }
};
</script>

<style scoped>

#app {
  overflow: hidden;
}

#app .reset-btn {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translate(-50%);
}

#app .reset-btn button {
  border: none;
  background-color: #2643e9;
  color: #ffffff;
  width: 230px;
  height: 80px;
  border-radius: 40px;
  font-size: 20px;
  cursor: pointer;
}

#app .boards {
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 150px;
}
</style>