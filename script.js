document.getElementById("year").textContent = new Date().getFullYear();

const WHATSAPP = "919389979354";
const PHONE = "9389979354";

function sendForm(e){
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const business = document.getElementById("business").value.trim();
  const message = document.getElementById("message").value.trim();

  const text = `Hello Web & Co!%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ABusiness: ${encodeURIComponent(business)}%0AProject: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer");
  const phone = document.createElement("a");
  phone.href = `tel:${PHONE}`;
  phone.textContent = "Call: " + PHONE;
  phone.style.marginLeft = "18px";
  footer.appendChild(phone);

  const wa = document.createElement("a");
  wa.href = `https://wa.me/${WHATSAPP}`;
  wa.target = "_blank";
  wa.rel = "noopener";
  wa.textContent = "WhatsApp ↗";
  wa.style.marginLeft = "18px";
  footer.appendChild(wa);
});
