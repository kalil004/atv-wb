import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListagemServicos extends Listagem {
    private servico: Array<Servico>
    constructor(servico: Array<Servico>) {
        super()
        this.servico = servico
    }
    public listar(): void {
        console.log(`\nLista de todos os serviços:`);
        this.servico.forEach(servico => {
            console.log(`---------------------------`);
            console.log(`Nome: ` + servico.nome);
            console.log('Preço: ' + servico.preco);
            
        });
        console.log(`\n`);
    }
    
}