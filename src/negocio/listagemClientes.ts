import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private cliente: Array<Cliente>
    constructor(cliente: Array<Cliente>) {
        super()
        this.cliente = cliente
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.cliente.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            cliente.getRgs.forEach(rg => {
                console.log(`RG: ` + rg.getValor)
            })
            console.log('Produtos consumidos: ')
            cliente.getProdutosConsumidos.forEach(produto => {
                console.log('  ' + produto.nome)
            })
            console.log('Serviços consumidos: ')
            cliente.getServicosConsumidos.forEach(serviço => {
                console.log('  ' + serviço.nome)
            })
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}