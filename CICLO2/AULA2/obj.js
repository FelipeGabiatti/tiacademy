

/*
var nome="Marcelo";
let sobreNome = "yuti";

if (true) {
	console.log("Var nome= " +nome );
	var nm = nome;
	console.log("Chamando o sobre nome " +sobreNome)
	let sn = "Da Silva";
	console.log(sobreNome);
}	

console.log("Meu nome é "+nm+" "+sobreNome+" "+sn);
console.log("Var nome= "+ nm);
*/


var pessoa = {
	nome: "Marcelo",
	rua: "Rua lá",
	ncasa: "777",
	dados: function(){
		document.write(
			"Nome...:"+this.nome+"<br>"+
			"Rua...:"+this.rua+"<br>"+
			"N. Casa...:"+this.ncasa+"<br>"
			)
	}
}

pessoa.dados();

//console.log("Nome "+pessoa.nome+" Endereço "+pessoa.rua+" Numero "+pessoa.ncasa); 