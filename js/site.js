(function () {
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-toggle]");
  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Loka valmynd" : "Opna valmynd");
  });
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
  const form = document.querySelector("[data-mail]");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = (fd.get("nafn") || "").toString().trim();
    const from = (fd.get("netfang") || "").toString().trim();
    const body = (fd.get("skilabod") || "").toString().trim();
    const lines = [];
    if (name) lines.push("Nafn: " + name);
    if (from) lines.push("Netfang: " + from);
    if (lines.length) lines.push("");
    lines.push(body);
    location.href =
      "mailto:midstod@midstodehf.is?subject=" +
      encodeURIComponent("Fyrirspurn af vef Miðstöðvar ehf") +
      "&body=" +
      encodeURIComponent(lines.join("\n"));
  });
})();
