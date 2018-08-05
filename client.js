const net = require("net");

const client = net.createConnection(6969, "0.0.0.0", () => {
  console.log("Connected");
  console.log(net);
  client.write("Doug");
  client.on("data", data => {
    console.log("Received: ", data.toString());

    console.log(client.address());
    // client.write(client.address());
  });

  process.stdin.pipe(client);
});
