function fakeDownload() {
  alert(
    "Download link is not connected yet. Replace this later with your GitHub release or ZIP file."
  );
}

const bootScreen = document.getElementById("bootScreen");

if (bootScreen) {
  window.addEventListener("load", () => {
    setTimeout(() => {
      bootScreen.classList.add("hidden");
    }, 900);
  });
}

const cards = document.querySelectorAll(
  ".feature-card, .glass-card, .download-tile"
);

window.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;

  cards.forEach((card) => {
    card.style.transform = `translate(${x * 4}px, ${y * 4}px)`;
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
    "experimenters.",
    "builders.",
    "learners.",
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