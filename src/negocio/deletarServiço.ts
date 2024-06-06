import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Deletar from "./deletar";

let execute = true;

export default class ApagarServiço extends Deletar {
    private servico: Array<Servico>
    private entrada: Entrada
    constructor(servico: Array<Servico>) {
        super()
        this.servico = servico
        this.entrada = new Entrada;
    }

    public deletar(): void {
        console.log(`\n Remoção de serviço`)
        execute = true
        while(execute) {
            let seleçao = this.entrada.receberTexto('Informe o nome do serviço: ')
            let count = 1
            this.servico.forEach(servico => {
                if (servico.nome == seleçao){
                    console.log(`Serviço selecionado: ${servico.nome}\n Deseja mesmo apagar este serviço?`)
                    let confirmar = this.entrada.receberNumero('1 - Excluir \n2- Cancelar');
                    switch(confirmar) {
                        case 1:
                            let index = this.servico.indexOf(servico)
                            this.servico.splice(index,1)
                            console.log('Serviço removido com sucesso.')
                            execute = false;
                            break;

                        case 2:
                            execute = false;
                            console.log('Operação cancelada.')
                            break;
                    }
                }
                
                else if(count == this.servico.length) {
                    console.log('\n O serviço não existe. \n')
                    execute = false;
                }
                else {
                    count++
                }
            })
        }
    }
}