const cuenta = JSON.parse(localStorage.getItem("cuenta"));
if (!cuenta) {
  window.location.href = "index.html";
}

document.getElementById("formEnviar").addEventListener("submit", function (e) {
  e.preventDefault();
  const destino = document.getElementById("destino").value.trim();
  const monto = parseInt(document.getElementById("monto").value);

  if (destino === cuenta.nombre) {
    return alert("No puedes enviarte dinero a ti mismo.");
  }

  if (monto <= 0 || monto > cuenta.saldo) {
    return alert("Monto inválido.");
  }

  let cuentas = JSON.parse(localStorage.getItem("cuentas")) || [];
  if (cuentas.length === 0) cuentas = [cuenta];

  const receptor = cuentas.find(c => c.nombre === destino);
  if (!receptor) {
    return alert("Cuenta destino no encontrada.");
  }

  cuenta.saldo -= monto;
  receptor.saldo += monto;

  cuenta.movimientos.push(`Enviado $${monto} a ${destino}`);
  receptor.movimientos.push(`Recibido $${monto} de ${cuenta.nombre}`);

  localStorage.setItem("cuenta", JSON.stringify(cuenta));
  localStorage.setItem("cuentas", JSON.stringify(cuentas));
  alert("Transferencia exitosa.");
  window.location.href = "inicio.html";
});
