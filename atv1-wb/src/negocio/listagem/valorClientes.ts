import Produto from "../../modelo/produto";
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ClientesValor implements Listagem {
    private cliente: Array<Cliente>
    private produto: Array<Produto>
    
    constructor(cliente: Array<Cliente>, produto: Array<Produto>) {
        this.cliente = cliente
        this.produto = produto
    }

    public listar(): void {
        let consumoValor : {nome: String, valorConsumo : number,
        }[] = this.cliente.map(({
            nome,
            getProdutosConsumidos : produtosConsumidos, 
        }) => ({
            nome,
            valorConsumo: this.somar(produtosConsumidos)
        }));

         let consumoClienteOrdenado = consumoValor.sort((
          a: { valorConsumo: number },
          b: { valorConsumo: number }
        ) => b.valorConsumo - a.valorConsumo);

        console.log(`\n Top 5 clientes que mais consumiram por preço: `);
        console.table(consumoClienteOrdenado.slice(0,5));
        console.log("\n");
    }

    public somar(produtos : Array<Produto>){
        let total = 0;
        produtos.forEach((prod)=>{
            total =+ prod.getPreco;
        })
        return total;
    }

}