/*var nome = "Marcelo";
console.log(nome.length);
console.log(nome[0]);*/


//var palavra = "Maça doce";

//console.log(palavra.match(/d/gi));

//console.log(palavra.search(/d/gi));

/*var str= "Lorem ipsum dolor sit amet consectetur," +
"adipisicing elit. Recusandae voluptas, blanditiis excepturi omnis";
var  mudarStr = str.replace(/e/gi, 'X');

console.log(mudarStr);*/

/*var comp1 = "Comparar";
var comp2= "comparar";
var c1 = comp1.toLowerCase();
var c2 = comp2.toLowerCase();
console.log(`Este é o c1: ${c1} Este é o c2: ${c2}`)
var comparacao = c1.localeCompare(c2);
console.log(comparacao);
*/

var p = ' fpalavra+ ';
var r = p.trim();
console.log(r);
var s =  r.replace(/f/gi, '');
console.log(s);
sub_a = s.replace('+', '');
console.log(`Removido: ${sub_a}`);	
//console.log(p.replace(/f/gi,''));
//console.log(p);

var valor = 1.35 // 1,35;
var formatarMoeda = valor.toLocaleString('pt-BR', {
	style: `currency`,
	currency: `BRL`
})
console.log(formatarMoeda);