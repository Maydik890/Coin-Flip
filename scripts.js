let caras = 0;
let cruzes = 0;
let coin = document.querySelector(".moneda");
let flipBtn = document.querySelector("#flip");
let resetBtn = document.querySelector("#reset");

flipBtn.addEventListener("click", () => {
  let i = Math.floor(Math.random() * 2);
  coin.style.animation = "none";
  if (i) {
    setTimeout(function () {
      coin.style.animation = "spin-cara 3s forwards";
    }, 100);
    caras++;
  } else {
    setTimeout(function () {
      coin.style.animation = "spin-cruz 3s forwards";
    }, 100);
    cruzes++;
  }
  setTimeout(updateStats, 3000);
  disableButton();
});
resetBtn.addEventListener("click", () => {
  coin.style.animation = "none";
  caras = 0;
  cruzes = 0;
  updateStats();
});

function updateStats() {
  document.querySelector("#vecesCara").textContent = `Cara: ${caras}`;
  document.querySelector("#vecesCruz").textContent = `Cruz: ${cruzes}`;
}

function disableButton() {
  flipBtn.disabled = true;
  setTimeout(function () {
    flipBtn.disabled = false;
  }, 3000);
}
