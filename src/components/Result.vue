<template>
  <div>
    <div class="result" v-if="$store.state.winner === 1">
      <h1>승</h1>
      <h1>패</h1>
    </div>
    <div class="result" v-else-if="$store.state.winner === 2">
      <h1>패</h1>
      <h1>승</h1>
    </div>
    <div class="result" v-else-if="$store.state.winner === 3">
      <h1>무승부</h1>
      <h1>무승부</h1>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.result {
  display: flex;
  justify-content: space-around;
  margin-top: 60px;
}
</style>