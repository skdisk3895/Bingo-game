npm i<template>
  <div id="app">
    <div class="reset-btn">
      <button @click="reset()">Reset</button>
    </div>
    <Result />
    <div class="boards">
      <Board ref="user_1" :user="1" />
      <Board ref="user_2" :user="2" />
    </div>
  </div>
</template>

<script>
import Board from "@/components/Board.vue";
import Result from "@/components/Result.vue";

export default {
  components: {
    Board,
    Result,
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

      // vuex state 초기화
      this.$store.state.turn = 1;
      this.$store.state.finish = false;
      this.$store.commit("resetColored");
      this.$store.state.winner = 0;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

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