function fakeDownload() {
  alert("Download link is not connected yet. Replace this later with your GitHub release or ZIP file.");
}

const homeTransition = document.getElementById("homeTransition");

if (homeTransition) {
  document.body.style.overflow = "hidden";

  window.addEventListener("load", () => {
    setTimeout(() => {
      homeTransition.classList.add("hide");
      document.body.style.overflow = "";
    }, 1200);
  });
}

document.querySelectorAll("main section, footer").forEach((item, index) => {
  item.classList.add("fade-in");
  item.style.animationDelay = `${index * 0.08}s`;
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
    "scripters.",
    "inventors",
    "changers",
    "innovators"
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