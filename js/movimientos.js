const cuenta = JSON.parse(localStorage.getItem("cuenta"));
if (!cuenta) {
  window.location.href = "index.html";
}

const lista = document.getElementById("lista");
if (cuenta.movimientos.length === 0) {
  lista.innerHTML = "<li>No hay movimientos.</li>";
} else {
  cuenta.movimientos.forEach(mov => {
    const li = document.createElement("li");
    li.textContent = mov;
    lista.appendChild(li);
  });
}
