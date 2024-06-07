import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    private produto: Array<Produto>
    constructor(produto: Array<Produto>) {
        super()
        this.produto = produto
    }

    public listar(): void {
        console.log('\nLista de todos os produtos: ')
        this.produto.forEach(produto => {
            console.log(`----------------------------`);
            console.log('Nome: ' + produto.nome);
            console.log('Preço: ' + produto.preco);
        });
        console.log(`\n`);
    }
}