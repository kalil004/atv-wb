import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";


export default class ClientesPorGenero implements Listagem {
    private cliente: Array<Cliente>

    constructor(cliente: Array<Cliente>) {
        this.cliente = cliente
    }
    
    public listar(): void {
      let clientesPorGenero = this.cliente.map(({nome, genero}) => ({
        masculino: genero === 'M' ? nome : '',
        feminino: genero === 'F ' ? nome : ''
      }));
      console.log(`\nTodos os clientes por gênero:`);
      console.table(clientesPorGenero);
      console.log(`\n`);
    }
}