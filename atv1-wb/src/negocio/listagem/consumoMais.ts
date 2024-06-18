import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ClientesMaisConsumo implements Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public listar(): void {
        let clientesComConsumos: { nome: string, quantidadeConsumo: number }[] = this.clientes.map(cliente => ({
            nome: cliente.nome,
            quantidadeConsumo: cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length
        }));

        clientesComConsumos.sort((a, b) => b.quantidadeConsumo - a.quantidadeConsumo);

        console.log(`\nTop 10 clientes que mais consumiram:`);
        console.table(clientesComConsumos.slice(0, 10));
        console.log(`\n`);
    }
}
