import Produto from "../../modelo/produto";
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ClientesValor implements Listagem {
    private clientes: Array<Cliente>;
    private produtos: Array<Produto>;

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>) {
        this.clientes = clientes;
        this.produtos = produtos;
    }

    public listar(): void {
        let consumoValor: { 
            nome: string; 
            valorConsumo: number; 
        }[] = this.clientes.map(cliente => ({
            nome: cliente.nome,
            valorConsumo: this.calcularValorConsumido(cliente.produtosConsumidos)
        }));

        consumoValor.sort((a, b) => b.valorConsumo - a.valorConsumo);

        console.log(`\nTop 5 clientes que mais consumiram por preço:`);
        console.table(consumoValor.slice(0, 5));
        console.log("\n");
    }

    private calcularValorConsumido(produtosConsumidos: Array<Produto>): number {
        let total = 0;
        produtosConsumidos.forEach(produtoConsumido => {
            let produto = this.produtos.find(p => p.nome === produtoConsumido.nome);
            if (produto) {
                total += produto.preco;
            }
        });
        return total;
    }
}
