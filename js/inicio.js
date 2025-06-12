const cuenta = JSON.parse(localStorage.getItem("cuenta"));
if (!cuenta) {
  window.location.href = "index.html";
}

document.getElementById("saludo").textContent = "Hola, " + cuenta.nombre;
document.getElementById("saldo").textContent = "$" + cuenta.saldo.toLocaleString();
