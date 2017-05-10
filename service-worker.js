self.addEventListener("message", function(message) {
  console.log("Got event");
  self.postMessage("message from jsfile worker");
});
console.log("end of worker");
