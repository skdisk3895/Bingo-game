<template>
  <div class="board">
    <div
      class="board-number"
      v-for="(number, idx) in bingoBoard"
      :key="idx"
      :ref="'bingo_'+number"
      @click="clickBingo(number)"
    >{{ number }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bingoBoard: [],
    };
  },
  created() {
    this.shakeBingo();
  },
  computed: {
    checkBingo: function () {
      return this.$store.state.bingo;
    },
  },
  watch: {
    checkBingo: function (val) {
      this.colorBingo(val);
    },
  },
  methods: {
    // 빙고판을 랜덤으로 섞는다.
    shakeBingo: function () {
      const arr = [];
      for (let i = 1; i <= 25; i++) arr.push(i);
      arr.sort(() => Math.random() - 0.5);
      this.bingoBoard = arr;
    },

    // 숫자판 색칠
    colorBingo: function (number) {
      this.$refs[`bingo_${number}`][0].classList.add("active");
    },

    // 숫자판 클릭
    clickBingo: function (number) {
      this.colorBingo(number);
      this.$store.commit("colorBingo", number);
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.board {
  width: 750px;
  border: 1px solid rgb(180, 180, 180);
  display: flex;
  flex-wrap: wrap;
}

.board .board-number {
  border: 1px solid rgb(180, 180, 180);
  flex: 0 0 20%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  cursor: pointer;
}

.board .board-number.active {
  color: white;
  background-color: #d91ae0;
}
</style>