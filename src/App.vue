<template>
  <div id="app">
    <div class="reset-btn">
      <button>Reset</button>
    </div>
    <div class="boards">
      <Board />
      <Board />
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
};
</script>

<style scoped>

#app {
  /* height: 1200px; */
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