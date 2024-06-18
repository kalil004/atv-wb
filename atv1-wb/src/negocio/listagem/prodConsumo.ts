import Produto from "../../modelo/produto";
import Listagem from "../listagem";
import Cliente from "../../modelo/cliente";

export default class ProdutosMaisConsumidos implements Listagem {
    private clientes: Array<Cliente>;
    private produtos: Array<Produto>;

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>) {
        this.clientes = clientes;
        this.produtos = produtos;
    }

    public listar(): void {
        let produtosMaisConsumidos: { 
            produto: string; 
            quantidade: number; 
        }[] = [];

        this.produtos.forEach(produto => {
            produtosMaisConsumidos.push({ 
                produto: produto.nome, 
                quantidade: 0 
            });
        });

        this.clientes.forEach(cliente => {
            cliente.produtosConsumidos.forEach(produtoConsumido => {
                let index = produtosMaisConsumidos.findIndex(item => item.produto === produtoConsumido.nome);
                if (index !== -1) {
                    produtosMaisConsumidos[index].quantidade++;
                }
            });
        });
        produtosMaisConsumidos.sort((a, b) => b.quantidade - a.quantidade);

        console.log(` \nProdutos mais consumidos: `);
        console.table(produtosMaisConsumidos.slice(0, 10));
        console.log(`\n`);
    }
}
