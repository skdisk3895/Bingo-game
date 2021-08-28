<template>
  <div>
    <div>
      <textarea class="chatview" disabled v-model="textarea"></textarea>
    </div>
    <input class="chat-input" type="text" v-model="message" />
    <button class="chat-submit" @click="sendMessage()">전송</button>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$socket);
    this.$socket.on("chat", (data) => {
      console.log(data);
      this.textarea += data.message + "\n";
    });
  },
  data() {
    return {
      textarea: "",
      message: "",
    };
  },
  methods: {
    sendMessage() {
      console.log(this.$socket);
      this.$socket.emit("chat", { message: this.message });
      this.textarea += this.message + "\n";
      this.message = "";
    },
  },
};
</script>

<style scoped>
.chatview {
  width: 800px;
  height: 500px;
}

.chat-input {
  width: 600px;
  height: 50px;
}

.chat-submit {
  margin-left: 10px;
  width: 100px;
  height: 50px;
}
</style>
