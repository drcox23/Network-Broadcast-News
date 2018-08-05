const net = require("net");

const allClients = [];
const server = net.createServer(client => {
  console.log("CLIENT CONNECTED!");
  client.write("ALOHA WELCOME TO SPARTASERVE" + "\n");
  client.write("Please Enter Username");
  client.on("data", data => {
    const msg = data.toString();
    console.log(msg);
    // console.log(client.address());
    // console.log("sock: ", socket);

    allClients.forEach(socket => {
      socket.write(msg);
      // console.log("elemental: ", element);
    });
  });

  // console.log("socket:", socket);
  // if()
  allClients.push(client);
  // console.log("clients: ", allClients);
});

server.listen(6969, () => {
  console.log("Server listening on port 6969");
  console.log("opened server on", server.address());
});
