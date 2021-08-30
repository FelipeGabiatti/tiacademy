window.onload = function(){

	//alert("Alerta");
	//const btn1 = document.getElementById("btn1");
	const btn1 = document.querySelector(".btn-click");
	const legP = document.querySelector(".legenda");
	const cxTexto = document.querySelector("#texto");


	btn1.addEventListener('click', ()=>{
		//alert("Olá");

		//legP.innerHTML = "Manipulando o DOM"  //escrever no elemento HTML

		legP.innerHTML += cxTexto.value;

	});

	legP.addEventListener('click', ()=>{

		legP.innerHTML = ' ';
	});
/*		legP.addEventListener('mousemove', ()=>{

		alert("Teste");
	})
*/


const trocaSenha = document.querySelector("#verSenha");
const cxSenha = document.querySelector("#senha");

trocaSenha.addEventListener('click', ()=>{
	if(cxSenha.getAttribute('type') == 'password'){
		cxSenha.setAttribute('type', 'text')
	}else{
		cxSenha.setAttribute('type', 'password')
	}

});

//alterar backgroud

const cxTrocaBg = document.querySelector("#cxTbg");

	cxTrocaBg.addEventListener('blur', ()=>{

		cxTrocaBg.setAttribute('class', 'corBg')

	});

//somar valores cx input text

const valor1 = document.querySelector("#v1");
const valor2 = document.querySelector("#v2");
const btnSomar = document.querySelector("#soma");
const spanResultado = document.querySelector("#resultado");

btnSomar.addEventListener('click' , ()=>{
	 var cx1 = valor1.value;
	 var cx2 = valor2.value;
	 var r = Number(cx1) + Number(cx2);
	 
	 spanResultado.innerHTML = r;

});

//evento modal
const btnModal = document.querySelector("#chamarModal");
const janelaModal = document.querySelector("#janModal");


btnModal.addEventListener('click', ()=>{
	janelaModal.setAttribute('class', 'modal')
});

janelaModal.addEventListener('click', ()=>{
	janelaModal.classList.remove('modal');
})
}