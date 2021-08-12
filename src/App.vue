<template>
  <div id="app">
    <div class="reset-btn">
      <button>Reset</button>
    </div>
    <Board />
    <Board />
  </div>
</template>

<script>
import Board from "@/components/Board.vue";

export default {
  components: {
    Board,
  },
};
</script>

<style scoped>
#app {
  height: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
}

#app .reset-btn {
  position: absolute;
  top: 90px;
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
</style>