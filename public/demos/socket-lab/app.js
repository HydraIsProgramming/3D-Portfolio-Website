const $ = (id) => document.getElementById(id);
let online = false,
  clients = [],
  counter = 1,
  packets = 0;
const now = () => new Date().toLocaleTimeString([], { hour12: false });
function log(who, msg) {
  packets++;
  $("packet-count").textContent = packets;
  const p = document.createElement("p");
  p.className = "log";
  p.innerHTML = `<span class="time">${now()}</span><span class="${who.toLowerCase()}">${who}</span><span>${msg}</span>`;
  $("logs").append(p);
  $("logs").scrollTop = $("logs").scrollHeight;
}
function sync() {
  const active = clients.filter((c) => c.active);
  $("client-count").textContent = `${active.length} / 3`;
  $("connections").innerHTML = active
    .map(
      (c) =>
        `<div class="client-node">${c.name}<br><small>${c.port}</small></div>`,
    )
    .join("");
  $("client-select").innerHTML = active
    .map((c) => `<option>${c.name}</option>`)
    .join("");
  const enabled = active.length > 0;
  $("command").disabled = !enabled;
  document.querySelector("#command-form button").disabled = !enabled;
  $("add-client").disabled = !online || active.length >= 3;
  $("hint").textContent = online
    ? enabled
      ? "Select a simulated endpoint and send a protocol command."
      : "Add a simulated endpoint to the listening server."
    : "Start the server to begin the simulation.";
}
function start() {
  online = !online;
  $("server-toggle").textContent = online ? "Stop server" : "Start server";
  $("server-status").textContent = online ? "Listening" : "Offline";
  $("server-status").className = online ? "online" : "";
  document.querySelector(".server-node").classList.toggle("online", online);
  log(
    "SERVER",
    online
      ? "Bound to 127.0.0.1:12345 — listening (backlog: 3)"
      : "Socket closed; all clients disconnected",
  );
  if (!online) clients.forEach((c) => (c.active = false));
  sync();
}
$("server-toggle").onclick = start;
$("add-client").onclick = () => {
  const c = {
    name: `Endpoint${String(counter).padStart(2, "0")}`,
    port: 5100 + counter,
    active: true,
  };
  counter++;
  clients.push(c);
  log(c.name, `SYN → 127.0.0.1:12345`);
  setTimeout(
    () => log("SERVER", `SYN-ACK → ${c.name}; connection established`),
    180,
  );
  sync();
};
function send(command) {
  const c = clients.find(
    (x) => x.name === $("client-select").value && x.active,
  );
  if (!c) return;
  log(c.name, `→ ${command}`);
  setTimeout(() => {
    let response = `${command} ACK`;
    if (command === "status")
      response = `${clients.filter((x) => x.active).length} simulated endpoint(s); server healthy`;
    if (command === "list") response = "architecture.pdf · sample-data.csv";
    if (command.startsWith("get "))
      response = command.endsWith("architecture.pdf")
        ? "84 KB transferred successfully"
        : "File not found";
    if (command === "exit") {
      response = "Connection closed";
      c.active = false;
    }
    log("SERVER", `← ${response}`);
    sync();
  }, 250);
}
$("command-form").onsubmit = (e) => {
  e.preventDefault();
  const value = $("command").value.trim();
  if (value) {
    send(value);
    $("command").value = "";
  }
};
document
  .querySelectorAll("[data-command]")
  .forEach((b) => (b.onclick = () => send(b.dataset.command)));
$("guided").onclick = async () => {
  if (!online) start();
  $("guided").disabled = true;
  await new Promise((resolve) => setTimeout(resolve, 350));
  $("add-client").click();
  for (const command of ["status", "list", "get architecture.pdf"]) {
    await new Promise((resolve) => setTimeout(resolve, 550));
    send(command);
  }
  $("guided").disabled = false;
};
$("clear").onclick = () => ($("logs").innerHTML = "");
$("reset").onclick = () => {
  online = false;
  clients = [];
  counter = 1;
  packets = 0;
  $("packet-count").textContent = "0";
  $("logs").innerHTML = '<p class="muted">Waiting for server…</p>';
  $("server-toggle").textContent = "Start server";
  $("server-status").textContent = "Offline";
  $("server-status").className = "";
  document.querySelector(".server-node").classList.remove("online");
  sync();
};
sync();
