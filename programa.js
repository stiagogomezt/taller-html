document.getElementById("mostrarNumeros").addEventListener("click", function() {
    var resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += i + "<br>";
    }
    document.getElementById("resultado").innerHTML = resultado;
});