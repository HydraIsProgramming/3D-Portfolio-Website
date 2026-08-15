const TYPES = [
  ["Sedan", 60, 2000, "5 seats · Automatic", "Everyday"],
  ["SUV", 100, 3500, "7 seats · AWD", "Family"],
  ["Truck", 150, 3000, "5 seats · 4×4", "Utility"],
  ["Luxury Sedan", 120, 500, "5 seats · Premium", "Executive"],
  ["Luxury SUV", 170, 750, "7 seats · Premium AWD", "Luxury"],
  ["Luxury Truck", 200, 700, "5 seats · Premium 4×4", "Flagship"],
];
let selected = 0;
const money = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    n,
  );
const el = (id) => document.getElementById(id);
function calculate() {
  const [name, rate, included] = TYPES[selected],
    days = Math.max(1, +el("days").value || 0),
    miles = Math.max(0, +el("miles").value || 0),
    extra = Math.max(0, miles - included) * 0.25,
    total = rate * days + extra;
  el("total").textContent = money(total);
  el("vehicle-label").textContent =
    `${name} · ${days} day${days === 1 ? "" : "s"}`;
  el("per-day").textContent = `${money(rate)}/day`;
  el("daily").textContent = `${money(rate)} × ${days}`;
  el("included").textContent = `${included.toLocaleString()} mi`;
  el("extra").textContent = money(extra);
  const used = Math.min(100, Math.round((miles / included) * 100));
  el("mileage-percent").textContent = `${used}%`;
  el("mileage-bar").style.width = `${used}%`;
  el("mileage-note").textContent = miles <= included
    ? `${(included - miles).toLocaleString()} miles remain included`
    : `${(miles - included).toLocaleString()} excess miles at $0.25/mi`;
  return { name, days, miles, total };
}
function render() {
  el("vehicles").innerHTML = TYPES.map(
    (v, i) =>
      `<button type="button" class="vehicle ${i === selected ? "selected" : ""}" data-i="${i}" aria-pressed="${i === selected}"><span class="vehicle-top"><b>${v[4]}</b><i>0${i + 1}</i></span><strong>${v[0]}</strong><span class="vehicle-spec">${v[3]}</span><span class="vehicle-price"><b>${money(v[1])}</b> / day</span></button>`,
  ).join("");
  document.querySelectorAll(".vehicle").forEach(
    (b) =>
      (b.onclick = () => {
        selected = +b.dataset.i;
        render();
        calculate();
      }),
  );
}
render();
document
  .querySelectorAll("input")
  .forEach((i) => i.addEventListener("input", calculate));
el("quote-form").onsubmit = (e) => {
  e.preventDefault();
  const q = calculate();
  el("summary").textContent =
    `${el("name").value}, your ${q.name} quote covers ${q.days} days and ${q.miles.toLocaleString()} expected miles.`;
  el("modal-total").textContent = money(q.total);
  el("confirmation").showModal();
};
document.querySelector(".close").onclick = () => el("confirmation").close();
document.querySelector(".done").onclick = () => el("confirmation").close();
calculate();
