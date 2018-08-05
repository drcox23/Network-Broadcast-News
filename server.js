const net = require("net");

const allClients = [];

const server = net.createServer(client => {
  // client.write("Please Enter Username");

  client.id = client.remotePort;
  // console.log("id: ", client.id);
  client.username;
  client.usernameSet = false;
  console.log(`"CLIENT ${client.id} CONNECTED!"`);

  //incoming data:
  client.on("data", data => {
    const msg = data.toString();
    console.log(msg);
    if (!client.username) {
      if (msg.toLowerCase().includes("admin")) {
        client.write(`\nKeyword "ADMIN" reserved. Choose another username: `);
      } else {
        client.username = msg;
        client.write(`\nUsername set as ${msg}\n `);
        client.write("ALOHA, WELCOME TO SPARTASERVE" + "\n");
      }
    }
    // console.log(client.address());
    // console.log("sock: ", socket);

    allClients.forEach(socket => {
      if (socket === client) return;
      socket.write(`${client.username}: + "" + "${msg}"`);
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
