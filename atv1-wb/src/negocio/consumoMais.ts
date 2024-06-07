import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ClientesMaisConsumo implements Listagem {
    private cliente: Array<Cliente>

    constructor(cliente: Array<Cliente>) {
        this.cliente = cliente
    }
    
    public listar(): void {
        let consumoCliente: { 
          nome: string, 
          quantidadeConsumo: number 
        }[] = this.cliente.map(({
          nome, 
          getProdutosConsumidos: produtosConsumidos,
        }) => ({
          nome,
          quantidadeConsumo: produtosConsumidos.length
        }));
        let consumoClienteSort = consumoCliente.sort((
          a: { quantidadeConsumo: number },
          b: { quantidadeConsumo: number }
        ) => b.quantidadeConsumo - a.quantidadeConsumo);

        console.log(`\nTop 10 clientes que mais consumiram:`);
        console.table(consumoClienteSort.slice(0, 10));
        console.log(`\n`);
    }
}