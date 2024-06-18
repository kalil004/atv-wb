import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ClientesPorGenero implements Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }
    
    public listar(): void {
        let clientesPorGenero = {
            masculino: [] as string[],
            feminino: [] as string[]
        };

        this.clientes.forEach(cliente => {
            if (cliente.genero === 'Masculino') {
                clientesPorGenero.masculino.push(cliente.nome); 
            } else if (cliente.genero === 'Feminino') {
                clientesPorGenero.feminino.push(cliente.nome); 
            }
        });

        console.log(`\nTodos os clientes por gênero:`);
        console.table(clientesPorGenero);
        console.log(`\n`);
    }
}
