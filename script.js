function fakeDownload() {
  alert(
    "Download link is not connected yet. Replace this later with your GitHub release or ZIP file."
  );
}

const cards = document.querySelectorAll(
  ".feature-card, .glass-card, .download-box"
);

window.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;

  cards.forEach((card) => {
    card.style.transform = `translate(${x * 6}px, ${y * 6}px)`;
  });
});

const changingText = document.querySelector(".changing-text");

if (changingText) {
  const words = [
    "developers.",
    "students.",
    "makers.",
    "tinkerers.",
    "creators.",
    "Raspberry Pi users.",
    "experimenters.",
    "builders.",
    "learners.",
    "hackers.",
    "coders.",
    "DIY projects."
  ];

  let wordIndex = 0;

  setInterval(() => {
    changingText.style.opacity = "0";

    setTimeout(() => {
      wordIndex = (wordIndex + 1) % words.length;
      changingText.textContent = words[wordIndex];
      changingText.style.opacity = "1";
    }, 250);
  }, 2200);
}