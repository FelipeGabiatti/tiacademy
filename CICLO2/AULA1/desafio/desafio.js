var nome = prompt("Digite seu nome");
var numero = parseInt (prompt(nome + " digite um número para comparar com 'n'"));
var soma = (numero + numero);
var v = numero === numero;
var subtração = numero - numero;
var resto = numero % numero;
var quadrado = numero * numero;

document.write("1. Seja bem vindo..: " + nome + "<br>");
document.write("2. Voce digitou o número..: " + numero + "<br>");
document.write("3. O retorno da comparação booleana é..:" + v + "<br>")
document.write("4. A soma dos valores é..: " + soma + "<br>") ;
document.write("5. A subtração dos valores..: " + subtração + "<br>");
document.write("6. O resto da divisão é de..: " + resto + "<br>");
document.write("7. O quadrado do número digitado é..: " + quadrado + "<br>");