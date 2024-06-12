import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Atualizar from "../atualizar";

export default class AtualizarProduto extends Atualizar {
    private produto: Array<Produto>
    private entrada: Entrada
    constructor(produto:Array<Produto>) {
        super()
        this.produto = produto
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        let count = 1
        console.log('\n Atualização de produto')
        let seleção = this.entrada.receberTexto('Insira o nome do produto: ');
        this.produto.forEach(produto => {
            if (produto.nome == seleção) {
                console.log('Produto selecionado.')
                let nome = this.entrada.receberTexto('Nome novo do produto: ')
                produto.nome = nome

                console.log('\n Atualização concluída. ');
            }
            else if(count == this.produto.length) {
                console.log('O produto não existe.')
            }
            else {
                count++
            }
        })
    }
}