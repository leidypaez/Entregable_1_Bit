// muestra la segunda pantalla escondiendo las demas
document.getElementById('aventure').addEventListener('click', () => {
  document.getElementById("first-screen").style.display = "none";
  document.getElementById('screen-aventure').style.display = "block";
});

