import Cliente from "../modelo/cliente";
import Entrada from "../io/entrada";
import Deletar from "./deletar";

let execute = true

export default class ApagarCliente extends Deletar {
    private cliente: Array<Cliente>
    private entrada: Entrada;
    constructor(cliente: Array<Cliente>) {
        super()
        this.cliente = cliente;
        this.entrada = new Entrada;
    }

    public deletar(): void {
        console.log('\n Remoção de cliente')
        execute = true;
        while (execute) {
            let seleçao = this.entrada.receberTexto('Insira o CPF do cliente');
            let count = 1
            this.cliente.forEach(cliente => {
                if (cliente.getCpf.getValor == seleçao) {
                    console.log(`Cliente selecionado: ${cliente.nome}\n Deseja mesmo apagar este cliente?`);
                    let confirmar = this.entrada.receberNumero('1 - Excluir, \n2 - Cancelar')
                    switch (confirmar) {
                        case 1:
                            let index = this.cliente.indexOf(cliente);
                            this.cliente.splice(index,1)
                            console.log(`Cliente removido com sucesso.`)
                            break;

                        case 2:
                            execute = false;
                            console.log('Operação cancelada')
                            break;
                    }
                }
                else if (count == this.cliente.length) {
                    console.log('\n O cliente não existe.')
                }
                else {
                    count++
                }
            })
        }
    }
}