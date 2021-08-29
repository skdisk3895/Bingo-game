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
import { io } from "socket.io-client";

export default {
  created() {
    // 상대쪽에서 채팅올 때
    this.socket.on("chat", (data) => {
      console.log(data);
      this.textarea += `${data.username}: ${data.message}` + "\n";
    });
  },
  data() {
    return {
      textarea: "",
      message: "",
      username: "문어햄",
      socket: io("http://localhost:3000"),
    };
  },
  methods: {
    // 메세지 전송
    // 아이디 정보는 세션에서 가져와야한다.
    sendMessage() {
      console.log(this.$socket);
      this.socket.emit("chat", {
        message: this.message,
        username: this.username,
      });
      this.textarea += `${this.username}: ${this.message}` + "\n";
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
