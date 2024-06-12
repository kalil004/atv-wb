import Produto from "../../modelo/produto";
import Listagem from "../listagem";
import Cliente from "../../modelo/cliente";

export default class ProdutosMaisConsumidos implements Listagem {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    constructor(
      clientes: Array<Cliente>, produtos: Array<Produto>) {
        this.clientes = clientes
        this.produtos = produtos
    }

    
    public listar(): void {
      let produtosMaisConsumidos: {
        produto: string;
        quantidade: number;
      }  [] = [];

      this.produtos.forEach((produto, index) => {
        produtosMaisConsumidos.push({ 
          produto: produto.nome,
          quantidade: 0
        });

        this.clientes.forEach(({ getProdutosConsumidos: produtosConsumidos }) => {
          let quantidadeProdutosConsumidos = produtosConsumidos.filter(
            produtoConsumido => produtoConsumido.nome === produto.nome
          ).length;
          produtosMaisConsumidos[index].quantidade += quantidadeProdutosConsumidos; 
        })
      });

      console.log(`\nProdutos mais consumidos :`);
      console.table(
        produtosMaisConsumidos.sort((
          a: { quantidade: number },
          b: { quantidade: number }
        ) => b.quantidade = a.quantidade).slice(0, 1)
      );
      console.log(`\n`);
    }
}