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

    card.style.transform =
      `translate(${x * 6}px, ${y * 6}px)`;

  });

});