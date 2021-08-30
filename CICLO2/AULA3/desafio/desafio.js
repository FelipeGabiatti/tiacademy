window.onload = function(){
const valor1 = document.querySelector("#valor1");
const valor2 = document.querySelector("#valor2");
const resultado = document.querySelector("#resultado");
const btnResultado = document.querySelector("#btnResultado");

btnResultado.addEventListener('click', ()=>{
	var v1 = valor1.value;
	var v2 = valor2.value;
	var r = Number(v1) + Number(v2);
    var resultadoR = resultado.value;
	if (r == resultadoR) {
		alert("Acertou");
	} else{
		alert("Errou");
	}
});
}