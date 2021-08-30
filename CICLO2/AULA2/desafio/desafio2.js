
var nome = prompt("Digite seu nome");
var numeroEntrada =prompt(nome + " digite um número para comparar com 'n'");
var numero = parseInt(numeroEntrada);
var soma = (numero + numero);
var v = numero === numero;
var subtração = numero - numero;
var resto = numero % numero;
var quadrado = numero * numero;
var entrada = typeof(numeroEntrada);
alert("A " +entrada + " foi enviada.");
alert("A " +entrada + " sera convertida a número");
var frutas = (prompt("Escolha entre 3 frutas: Laranja, Uva, Manga."));

switch(frutas){
	case 'Laranja':
	break;

	case 'Uva':
	break;

	case 'Manga':
	break;

	default:
		alert(nome+ " a fruta escolhida não se encontra na lista.");
}

document.write("1. Seja bem vindo..: " + nome + "<br>");
document.write("2. Voce digitou o número..: " + numero + "<br>");
document.write("3. O retorno da comparação booleana é..:" + v + "<br>")
document.write("4. A soma dos valores é..: " + soma + "<br>") ;
document.write("5. A subtração dos valores..: " + subtração + "<br>");
document.write("6. O resto da divisão é de..: " + resto + "<br>");
document.write("7. O quadrado do número digitado é..: " + quadrado + "<br>");
document.write("8. A fruta escolhida foi...: " + frutas + "<br>");