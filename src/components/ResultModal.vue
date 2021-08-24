<template>
  <div class="modal" ref="modal">
    <h1 v-if="getWinner === 1">유저 1 승!</h1>
    <h1 v-else-if="getWinner === 2">유저 2 승!</h1>
    <h1 v-else-if="getWinner === 3">무승부!</h1>
  </div>
</template>

<script>
export default {
  computed: {
    getWinner: function () {
      return this.$store.state.winner;
    }
  },
  watch: {
    getWinner: function () {
      this.activeModal();
    }
  },
  methods: {
    activeModal: function () {
      this.$refs["modal"].classList.add("active");
    }
  }
}
</script>

<style scoped>
.modal {
  width: 500px;
  height: 200px;
  background-color:#ffffff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  display: none;
}

.modal.active {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
</style>