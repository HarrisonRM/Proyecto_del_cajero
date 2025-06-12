const cuenta = JSON.parse(localStorage.getItem("cuenta"));
if (!cuenta) {
  window.location.href = "index.html";
}

const numero = "5489 " + Math.floor(1000 + Math.random() * 9000) + " " + Math.floor(1000 + Math.random() * 9000) + " 0001";
const vencimiento = "12/28";
const cvv = Math.floor(100 + Math.random() * 900);

document.getElementById("tarjeta").innerHTML = `
  <p>Nombre: ${cuenta.nombre}</p>
  <p>Número: ${numero}</p>
  <p>Vencimiento: ${vencimiento}</p>
  <p>CVV: ${cvv}</p>
`;
