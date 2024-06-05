import Entrada from "../io/entrada";
import Cadastro from "./cadastro";
import Produto from "../modelo/produto";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor (produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro de produto`);
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do produto`);
        let produto = new Produto(nome);
        this.produtos.push(produto)
        console.log(`\n Cadastro concluído\n`);

    }
}
