<template>
  <div>
      <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      board: []
    }
  },
  created() {
    arr = []
    for (let i = 1; i <= 25; i++)
      arr.push(i);
    this.board = arr
  }
}
</script>

<style scoped>

</style>