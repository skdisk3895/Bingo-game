const express = require("express")
const app = express();
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
    credentials: true
  }
});

const PORT = process.env.PORT || 3000;

const auth = require("./controller/authController");

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", auth);

// socket 통신
io.on("connection", (socket) => {
  console.log(`Connect from Client: ${socket}`);

  socket.on("chat", (data) => {
    console.log(`message from Client: ${data.message}`);
    console.log(`id : ${data.username}`);

    const rtnMessage = {
      message: data.message,
      username: data.username,
    };

    // 클라이언트에게 메세지 전송
    socket.broadcast.emit("chat", rtnMessage);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(PORT, function () {
  console.log(`socket io server listening on port ${PORT}`);
});
