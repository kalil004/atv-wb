import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Atualizar from "../atualizar";

export default class AtualizarServiço extends Atualizar {
    private servico: Array<Servico>
    private entrada: Entrada
    constructor(servico:Array<Servico>) {
        super()
        this.servico = servico
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        let count = 1
        console.log('\n Atualização de serviço')
        let seleção = this.entrada.receberTexto('Insira o nome do serviço: ');
        this.servico.forEach(servico => {
            if (servico.nome == seleção) {
                console.log('Serviço selecionado.')
                let nome = this.entrada.receberTexto('Nome novo do serviço: ')
                servico.nome = nome

                console.log('\n Atualização concluída. ');
            }
            else if(count == this.servico.length) {
                console.log('\nO serviço não existe.')
            }
            else {
                count++
            }
        })
    }
}