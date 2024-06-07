import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class MaisConsumoPorGenero implements Listagem {
    private cliente: Array<Cliente>
    private produto: Array<Produto>
    constructor(cliente: Array<Cliente>, produto: Array<Produto>) {
        this.cliente = cliente
        this.produto = produto
    }

    public listar(): void {
        let produtosMaisConsumidosMasculino: {
          produto: string;
          quantidade: number;
        }[] = [];
  
        let produtosMaisConsumidosFeminino: {
          produto: string;
          quantidade: number;
        }[] = [];
  
        this.produto.forEach(({ getNome: nomeProduto }, index) => {
          produtosMaisConsumidosMasculino.push({ 
            produto: nomeProduto,
            quantidade: 0
          });
  
        produtosMaisConsumidosFeminino.push({ 
            produto: nomeProduto,
            quantidade: 0
          });
  
          this.cliente.filter(({ genero }) => genero === 'm')
            .forEach(({ getProdutosConsumidos: produtosConsumidos }) => {
              let quantidadeProdutosConsumidos = produtosConsumidos.filter(
                ({ getNome: nomeProdutoConsumido, getPreco: valorProduto }) => 
                  nomeProdutoConsumido === nomeProduto && valorProduto > 0
              ).length;
              produtosMaisConsumidosMasculino[index].quantidade += quantidadeProdutosConsumidos; 
            })
  
          this.cliente.filter(({ genero }) => genero === 'f')
            .forEach(({ getProdutosConsumidos: produtosConsumidos }) => {
              let quantidadeProdutosConsumidos = produtosConsumidos.filter(
                ({ getNome: nomeProdutoConsumido, getPreco: valorProduto }) => 
                  nomeProdutoConsumido === nomeProduto && valorProduto > 0
              ).length;
              produtosMaisConsumidosFeminino[index].quantidade += quantidadeProdutosConsumidos; 
            })
        });
  
        console.log(`\nProduto mais consumido:`);
        console.log('Produtos mais consumidos pelo gênero masculino');
        console.table(
          produtosMaisConsumidosMasculino.sort((
            a: { quantidade: number },
            b: { quantidade: number }
          ) => b.quantidade = a.quantidade).slice(0, 1)
        );
        console.log('Produtos mais consumidos pelo gênero feminino');
        console.table(
          produtosMaisConsumidosFeminino.sort((
            a: { quantidade: number },
            b: { quantidade: number }
          ) => b.quantidade = a.quantidade).slice(0, 1)
        );
        console.log(`\n`);
      }
  }
