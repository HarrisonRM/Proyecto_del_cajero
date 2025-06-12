const cuenta = JSON.parse(localStorage.getItem("cuenta"));
if (!cuenta) {
  window.location.href = "index.html";
}

document.getElementById("formRecargar").addEventListener("submit", function (e) {
  e.preventDefault();
  const tipo = document.getElementById("tipo").value;
  const monto = parseInt(document.getElementById("monto").value);

  if (monto <= 0 || monto > cuenta.saldo) {
    return alert("Monto inválido.");
  }

  cuenta.saldo -= monto;
  cuenta.movimientos.push(`Recarga de ${tipo}: $${monto}`);
  localStorage.setItem("cuenta", JSON.stringify(cuenta));

  alert("Recarga exitosa.");
  window.location.href = "inicio.html";
});
