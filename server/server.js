const app = require("express")();
const http = require("http");
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
    credentials: true
  }
});


// app.all('/*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });


io.on("connection", (socket) => {
  console.log(`Connect from Client: ${socket}`);

  socket.on("chat", (data) => {
    console.log(`message from Client: ${data.message}`);
    console.log(`id : ${data.socketId}`);

    const rtnMessage = {
      message: data.message,
      socketId: data.socketId,
    };

    // 클라이언트에게 메세지 전송
    socket.broadcast.emit("chat", rtnMessage);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3000, function () {
  console.log("socket io server listening on port 3000");
});
