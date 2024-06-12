import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Atualizar from "../atualizar";
import ListagemClientes from "./listagemClientes";

export default class AtualizarCliente extends Atualizar {
    private cliente: Array<Cliente>
    private entrada: Entrada
    constructor(cliente: Array<Cliente>) {
        super()
        this.cliente = cliente
        this.entrada = new Entrada
    }

    public atualizar(): void {
        console.log('\n Atualização de cliente');
        let seleçao = this.entrada.receberTexto('Informe o CPF do cliente: ')
        let count = 1

        this.cliente.forEach(cliente => {
            if (cliente.getCpf.getValor == seleçao) {
                console.log('Cliente selecionado, atualize os dados;')
                let nome = this.entrada.receberTexto('Digite o nome do cliente selecionado: ')
                let nomeSocial = this.entrada.receberTexto('Digite o nome social do cliente selecionado: ')
                cliente.nome = nome
                cliente.nomeSocial = nomeSocial
                console.log('\nCliente atualizado.\n');
            }
            else if(count == this.cliente.length) {
                console.log('\nO cliente não existe.\n')
            }
            else {
                count++
            }
        })
    }
}

