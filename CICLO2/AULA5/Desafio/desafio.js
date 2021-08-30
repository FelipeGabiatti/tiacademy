window.onload = function(){

	const cxCep = document.querySelector(".cxCep");
	const btnBusca = document.querySelector("#btnBuscar");

	const dadosCep = async function(cepUrl){
		var url = `https://viacep.com.br/ws/${cepUrl}/json/`
		var consultaCep = await fetch(url);
		var dadosCep = await consultaCep.json();

		for( var campos in dadosCep){
			console.log(campos);

			if(document.querySelector("#"+campos)){
			document.querySelector("#"+campos).value = dadosCep[campos]
			}
		}
	}

	btnBusca.addEventListener('click', ()=>{

		let cep = cxCep.value;
		dadosCep(cep);
	})

}