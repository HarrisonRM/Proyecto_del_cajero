const cuentas = [
  { nombre: "Harrison", clave: "1234", saldo: 200000, movimientos: [] },
  { nombre: "Cristian", clave: "1234", saldo: 200000, movimientos: [] },
  { nombre: "Samuel", clave: "1234", saldo: 200000, movimientos: [] }
];

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;

  const cuenta = cuentas.find(c => c.nombre === usuario && c.clave === clave);
  if (cuenta) {
    localStorage.setItem("cuenta", JSON.stringify(cuenta));
    window.location.href = "/paginas/inicio.html";
  } else {
    alert("Usuario o clave incorrectos.");
  }
});
