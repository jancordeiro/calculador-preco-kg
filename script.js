function calcularPrecoPorKg() {
    var precoTotal = parseFloat(document.getElementById("preco_total").value);
    var pesoKg = parseFloat(document.getElementById("peso_kg").value);

	if (pesoKg > 0) {
		var precoPorKg = precoTotal / pesoKg;
		document.getElementById("resultado").textContent = "O preço por Kg é: R$ " + precoPorKg.toFixed(2);
		document.getElementById("resultado-box").style.display = "block";
		}
		
		else {
        document.getElementById("resultado").textContent = "O peso deve ser maior que zero.";
		document.getElementById("resultado-box").style.display = "block";
	}
}