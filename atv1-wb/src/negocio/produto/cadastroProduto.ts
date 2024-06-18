import Entrada from "../../io/entrada";
import Cadastro from "../cadastro";
import Produto from "../../modelo/produto";


export default class CadastroProdutos extends Cadastro{
    private nome : Array<Produto>
    private entrada: Entrada
    constructor(nome : Array<Produto>){
        super()
        this.nome = nome
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\n Cadastro de produto`);
        let nome = this.entrada.receberTexto(`Insira o nome do produto: `)
        let preco = this.entrada.receberNumero(`Insira o preço do produto: `)
        let produto = new Produto(nome, preco);
        this.nome.push(produto)
        console.log(`\n Cadastro concluído\n`);   
    }
}