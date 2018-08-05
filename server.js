const net = require("net");

const server = net.createServer(client => {
  console.log("CLIENT CONNECTED!");
  client.write("ALOHA WELCOME TO SPARTASERVE");
  client.on("data", data => {
    console.log(data.toString());
    console.log(client.address());
  });
});

server.listen(6969, () => {
  console.log("Server listening on port 6969");
  console.log("opened server on", server.address());
});
