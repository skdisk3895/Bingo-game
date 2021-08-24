<template>
  <div class="shadow" ref="shadow"></div>
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
      this.activeShadow();
    }
  },
  methods: {
    activeShadow: function () {
      this.$refs["shadow"].classList.add("active");
    }
  }
}
</script>

<style>
.shadow.active {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}
</style>