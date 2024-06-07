import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Deletar from "./deletar";

let execute = true;

export default class ApagarProduto extends Deletar {
    private produto: Array<Produto>
    private entrada: Entrada
    constructor(produto: Array<Produto>) {
        super()
        this.produto = produto
        this.entrada = new Entrada;
    }

    public deletar(): void {
        console.log(`\n Remoção de produto`)
        execute = true
        while(execute) {
            let seleçao = this.entrada.receberTexto('Informe o nome do produto: ')
            let count = 1
            this.produto.forEach(produto => {
                if (produto.nome == seleçao){
                    console.log(`Produto selecionado: ${produto.nome}\n Deseja mesmo apagar este produto?`)
                    let confirmar = this.entrada.receberNumero('1 - Excluir \n2- Cancelar');
                    switch(confirmar) {
                        case 1:
                            let index = this.produto.indexOf(produto)
                            this.produto.splice(index,1)
                            console.log('Produto removido com sucesso.')
                            execute = false;
                            break;

                        case 2:
                            execute = false;
                            console.log('Operação cancelada.')
                            break;
                    }
                }
                
                else if(count == this.produto.length) {
                    console.log('\n O produto não existe. \n')
                    execute = false;
                }
                else {
                    count++
                }
            })
        }
    }
}