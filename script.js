let last = "";

function falar(texto) {
  speechSynthesis.cancel();
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}

document.addEventListener("mouseover", (e) => {
  const el = e.target.closest("[data-read]");
  if (!el) return;

  const text = el.innerText?.trim();
  if (!text) return;

  if (text.length < 2 || text.length > 200) return;
  if (text === last) return;

  last = text;

  falar(text);
});