import Entrada from "../../io/entrada"
import Cadastro from "../cadastro"
import Servico from "../../modelo/servico"


export default class CadastroServicos extends Cadastro{
    private nome : Array<Servico>
    private entrada: Entrada
    constructor(nome : Array<Servico>){
        super()
        this.nome = nome
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\n Cadastro do serviço`);
        let nome = this.entrada.receberTexto(`Insira o nome do serviço: `) 
        let preco = this.entrada.receberNumero(`Insira o preço do serviço: `)
        let servico = new Servico(nome, preco);
        this.nome.push(servico)
        console.log(`\n Cadastro concluído! \n`);
    }
}