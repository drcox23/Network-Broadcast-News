const net = require("net");

const client = net.createConnection(2877, "34.219.80.229", () => {
  console.log("Connected");
  setUserName();
  // console.log(net);
  // client.write("Doug");
});

setUserName = () => {
  process.stdout.write("Choose Username: ");
};

client.on("data", data => {
  console.log(data.toString());

  // console.log(client.address());
  // client.write(client.address());
});

process.stdin.pipe(client);
