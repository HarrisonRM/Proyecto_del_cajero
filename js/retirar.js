const cuenta = JSON.parse(localStorage.getItem("cuenta"));
if (!cuenta) {
  window.location.href = "index.html";
}

document.getElementById("formRetiro").addEventListener("submit", function (e) {
  e.preventDefault();
  const monto = parseInt(document.getElementById("retiro").value);

  if (monto <= 0 || monto > cuenta.saldo) {
    return alert("Monto inválido.");
  }

  cuenta.saldo -= monto;
  cuenta.movimientos.push(`Retiro de $${monto}`);
  localStorage.setItem("cuenta", JSON.stringify(cuenta));

  alert("Retiro exitoso.");
  window.location.href = "inicio.html";
});
