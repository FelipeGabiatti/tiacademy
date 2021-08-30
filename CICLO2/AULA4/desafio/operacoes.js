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

				li.addEventListener('click',(itemRemover)=>{

					itemRemover.target.parentNode.removeChild(itemRemover.target)

					const posicao = armazenaIten.indexOf(itemRemover.target.textContent);

					armazenaIten.splice(posicao, 1);


					var result = produtos.filter(obj => {
  					return obj.prodDesc === itemRemover.target.textContent
					})

					totalPedido +=- Number(result[0].prodPreco)
					mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})

				})

				totalPedido += Number(item.dataset.preco);
				mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})


			}else{
				alert(`Este item ${item.textContent} já está na sua cesta`)
			}



		})
	})

} //fim