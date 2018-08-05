const net = require("net");

const client = net.createConnection(6969, "0.0.0.0", () => {
  console.log("Connected");
  // console.log(net);
  // client.write("client2");
  client.on("data", data => {
    console.log(data.toString());

    // console.log(client.address());
    // client.write(client.address());
  });

  process.stdin.pipe(client);
});
