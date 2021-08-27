const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

// setting cors
// app.all("/*", function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });

app.get("/", function (req, res) {
  res.sendFile("Hello server");
});

io.on("connection", (client) => {
  client.on("event", (data) => {
    console.log(data);
  });
  client.on("disconnect", () => {});
});

server.listen(3000, function () {
  console.log("socket io server listening on port 3000");
});
