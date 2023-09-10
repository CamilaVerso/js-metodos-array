let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordenaLivrosPorPreco)

function ordenaLivrosPorPreco() {
	let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
	exibirOsLivrosNaTela(livrosOrdenados)
}