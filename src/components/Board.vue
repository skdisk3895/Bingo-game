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
  props: [
    "user",
  ],
  data() {
    return {
      bingoBoard: [],
      colored: [],
    };
  },
  created() {
    this.initColored();
    this.shakeBingo();
  },
  computed: {
    checkBingo: function () {
      return this.$store.state.bingo;
    },
  },
  watch: {
    checkBingo: function (val) {
      this.user === 1 ? this.colorFirstBingo(val) : this.colorSecondBingo(val); 
      this.checkTotalBingo();

      if (this.user === 2) this.checkResult();
    },
  },
  methods: {
    initColored: function () {
      if (this.user === 1) {
        for (let i = 0; i < 5; i++) {
          for (let j = 0; j < 5; j++) {
            this.$store.state.colored_1.push(false);
          }
        }
      } else {
        for (let i = 0; i < 5; i++) {
          for (let j = 0; j < 5; j++) {
            this.$store.state.colored_2.push(false);
          }
        }
      }
    },
    // 빙고판을 랜덤으로 섞는다.
    shakeBingo: function () {
      const arr = [];
      for (let i = 1; i <= 25; i++) arr.push(i);
      arr.sort(() => Math.random() - 0.5);
      this.bingoBoard = arr;
    },
    // 첫 번째 빙고 숫자판 색칠
    colorFirstBingo: function (number) {
      // 색칠된 보드 체크
      for (let i = 0; i < 25; i++) {
        if (Object.entries(this.$refs)[i][0] === `bingo_${number}`) {
          this.$store.state.colored_1[i] = true;
          break;
        }
      }
      
      // 색칠
      this.$refs[`bingo_${number}`][0].classList.add("active");
    },
    // 두 번째 빙고 숫자판 색칠
    colorSecondBingo: function (number) {
      // 색칠된 보드 체크
      for (let i = 0; i < 25; i++) {
        if (Object.entries(this.$refs)[i][0] === `bingo_${number}`) {
          this.$store.state.colored_2[i] = true;
          break;
        }
      }
      
      // 색칠
      this.$refs[`bingo_${number}`][0].classList.add("active");
    },
    // 결과 체크
    checkResult: function () {
      if (this.$store.state.user_1 >= 5 && this.$store.state.user_2 < 5) {
        this.$store.state.winner = 1;
        this.$store.state.finish = true;
      } else if (this.$store.state.user_2 >= 5 && this.$store.state.user_1 < 5) {
        this.$store.state.winner = 2;
        this.$store.state.finish = true;
      } else if (this.$store.state.user_2 >= 5 && this.$store.state.user_1 >= 5) {
        this.$store.state.winner = 3;
        this.$store.state.finish = true;
      }
    },
    // 전체 빙고 개수 체크
    checkTotalBingo: function () {
      if (this.user === 1) {
        this.$store.state.user_1 = this.checkHorizontal(this.$store.state.colored_1) + this.checkVertical(this.$store.state.colored_1) + this.checkDiagonal(this.$store.state.colored_1); 
      } else {
        this.$store.state.user_2 = this.checkHorizontal(this.$store.state.colored_2) + this.checkVertical(this.$store.state.colored_2) + this.checkDiagonal(this.$store.state.colored_2);
      }
    },
    // 가로 빙고 수 체크
    checkHorizontal: function (colored) {
      let total = 0;
      for (let i = 0; i <= 20; i+=5) {
        let score = 0;
        for (let j = i; j < i+5; j++) {
          if (colored[j]) score++;
        }
        if (score === 5) total++;
      }
      return total;
    },
    // 세로 빙고 수 체크
    checkVertical: function (colored) {
      let total = 0;
      for (let i = 0; i < 5; i++) {
        let score = 0;
        for (let j = i; j <= i+20; j+=5) {
          if (colored[j]) score++;
        }
        if (score === 5) total++;
      }
      return total;
    },
    // 대각선 빙고 수 체크
    checkDiagonal: function (colored) {
      // 오른쪽 아래 방향
      let total = 0;
      let score = 0;
      
      for (let i = 0; i < this.colored.length; i += (5 + 1)) {
        if (colored[i]) score++;
      }
      if (score === 5) total++;

      // 왼쪽 아래 방향
      score = 0;
      for (let i = (5 - 1); i <= (5 * 4); i += (5 - 1)) {
        if (colored[i]) score++;
      }
      if (score === 5) total++;

      return total;
    },
    // 숫자판 클릭
    clickBingo: function (number) {
      if (this.$store.state.finish) return;
      if (this.user !== this.$store.state.turn) {
        alert("당신 차례가 아닙니다.");
        return;
      }
      this.$store.commit("colorBingo", number);
      this.$store.state.turn = this.user === 1 ? 2 : 1;
    },
  },
};
</script>

<style scoped>
.board {
  width: 40.3vw;
  border: 2px solid rgb(180, 180, 180);
  display: flex;
  flex-wrap: wrap;
  margin: 0px 20px;
}

.board .board-number {
  border: 2px solid rgb(180, 180, 180);
  flex: 0 0 8vw;
  height: 15vh;
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