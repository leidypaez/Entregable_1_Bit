// muestra la segunda pantalla escondiendo las demas
document.getElementById('aventure').addEventListener('click', () => {
  document.getElementById("first-screen").style.display = "none";
  document.getElementById('screen-shooter').style.display = "none";
  document.getElementById('screen-aventure').style.display = "block";
});

document.getElementById('shooter').addEventListener('click', () => {
  document.getElementById("first-screen").style.display = "none";
  document.getElementById('screen-aventure').style.display = "none";
  document.getElementById('screen-shooter').style.display = "block";
});

document.getElementById('super-game').addEventListener('click', () => {
  document.getElementById("first-screen").style.display = "none";
  document.getElementById('screen-aventure').style.display = "none";
  document.getElementById('screen-shooter').style.display = "none";
  document.getElementById('screen-super-game').style.display = "block";
});
