window.onload= function(){

	//produtos
	(()=>{

		let mostrarProdutosCliente = document.querySelector("#content-produtos > ul#produtos");

		for (let idx in produtos){
			mostrarProdutosCliente.innerHTML += `<li class='itemProduto' data-preco=${produtos[idx].prodPreco}>${produtos[idx].prodDesc}</li>`
		}

	})(produtos)


	//compra
	const itemProduto = document.querySelectorAll("#produtos > li.itemProduto");
	const cestaDoCliente = document.querySelector("ul#cestaDoCliente");
	const mostraTotalCompra = document.querySelector("#mostraTotalCompra");
	const armazenaIten =[];
	var totalPedido = 0;

	itemProduto.forEach((item)=>{

		item.addEventListener('click',()=>{

			li = document.createElement("li");

			if (armazenaIten.indexOf(item.textContent) == -1) {

				armazenaIten.push(item.textContent);

				cestaDoCliente.appendChild(li).textContent = item.textContent;

				li.addEventListener('click',(e)=>{

					e.target.parentNode.removeChild(e.target)

					const index = armazenaIten.indexOf(e.target.textContent);

					armazenaIten.splice(index, 1);

					var result = produtos.filter(obj => {
  					return obj.prodDesc === e.target.textContent
					})

					totalPedido +=- Number(result[0].prodPreco)
					mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})

					console.log(Number(result[0].prodPreco))
				})

				totalPedido += Number(item.dataset.preco);
				mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})


			}else{
				alert(`Este item ${item.textContent} já está na sua cesta`)
			}



		})
	})

} //fim