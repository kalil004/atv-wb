import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ClientesMenosConsumo implements Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public listar(): void {
        let clienteConsumos: { nome: string, quantidadeConsumo: number }[] = this.clientes.map(cliente => ({
            nome: cliente.nome,
            quantidadeConsumo: cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length
        }));

        clienteConsumos.sort((a, b) =>  a.quantidadeConsumo - b.quantidadeConsumo);

        console.log(`\nTop 10 clientes que menos consumiram:`);
        console.table(clienteConsumos.slice(0, 10));
        console.log(`\n`);
    }
}
