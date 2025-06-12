const cuenta = JSON.parse(localStorage.getItem("cuenta"));
if (!cuenta) {
  window.location.href = "index.html";
}

document.getElementById("formPagar").addEventListener("submit", function (e) {
  e.preventDefault();
  const empresa = document.getElementById("empresa").value;
  const monto = parseInt(document.getElementById("monto").value);

  if (monto <= 0 || monto > cuenta.saldo) {
    return alert("Monto inválido.");
  }

  cuenta.saldo -= monto;
  cuenta.movimientos.push(`Pago a ${empresa} por $${monto}`);
  localStorage.setItem("cuenta", JSON.stringify(cuenta));

  alert("Pago realizado.");
  window.location.href = "inicio.html";
});
