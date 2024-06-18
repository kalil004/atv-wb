import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class MaisConsumidosGenero extends Listagem {
  private clientes: Array<Cliente>;
  private produtos: Array<Produto>;
  private servicos: Array<Servico>;
  constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
      super();
      this.clientes = clientes;
      this.produtos = produtos;
      this.servicos = servicos;
  }

  public listar(): void {
      console.log('Produtos e Serviços mais consumidos por gênero:');

      const topProdutosFeminino: { nome: string, valor: number, quantidade: number }[] = [];
      const topServicosFeminino: { nome: string, valor: number, quantidade: number }[] = [];

      const topProdutosMasculino: { nome: string, valor: number, quantidade: number }[] = [];
      const topServicosMasculino: { nome: string, valor: number, quantidade: number }[] = [];

      console.log('Feminino');

      this.produtos.forEach(produto => {
          topProdutosFeminino.push({ nome: produto.nome, valor: produto.preco, quantidade: 0 });
      });

      topProdutosFeminino.forEach(prod => {
          this.clientes.forEach(cliente => {
              cliente.produtosConsumidos.forEach(prodConsumido => {
                  if (prodConsumido.nome == prod.nome) {
                      if (cliente.genero.toUpperCase() === 'F' || cliente.genero.toUpperCase() === 'FEMININO') {
                          prod.quantidade = prod.quantidade + 1;
                      }
                  }
              });
          });
      });

      topProdutosFeminino.sort((prod1, prod2) => (prod1.quantidade > prod2.quantidade) ? -1 : 1);
      console.log(`Produtos:`);

      let ordemProdFeminino = 1;

      topProdutosFeminino.forEach(prod => {
          console.log(`${ordemProdFeminino} - ${prod.nome}`);
          ordemProdFeminino++;
      });

      this.servicos.forEach(servico => {
          topServicosFeminino.push({ nome: servico.nome, valor: servico.preco, quantidade: 0 });
      });

      topServicosFeminino.forEach(serv => {
          this.clientes.forEach(cliente => {
              cliente.servicosConsumidos.forEach(servConsumido => {
                  if (servConsumido.nome == serv.nome) {
                      if (cliente.genero.toUpperCase() === 'F' || cliente.genero.toUpperCase() === 'FEMININO') {
                          serv.quantidade = serv.quantidade + 1;
                      }
                  }
              });
          });
      });

      topServicosFeminino.sort((serv1, serv2) => (serv1.quantidade > serv2.quantidade) ? -1 : 1);
      console.log(`Serviços:`);

      let ordemServFeminino = 1;

      topServicosFeminino.forEach(serv => {
          console.log(`${ordemServFeminino} - ${serv.nome}`);
          ordemServFeminino++;
      });

      this.produtos.forEach(produto => {
          topProdutosMasculino.push({ nome: produto.nome, valor: produto.preco, quantidade: 0 });
      });

      topProdutosMasculino.forEach(prod => {
          this.clientes.forEach(cliente => {
              cliente.produtosConsumidos.forEach(prodConsumido => {
                  if (prodConsumido.nome == prod.nome) {
                      if (cliente.genero.toUpperCase() === 'M' || cliente.genero.toUpperCase() === 'MASCULINO') {
                          prod.quantidade = prod.quantidade + 1;
                      }
                  }
              });
          });
      });

      console.log('Gênero Masculino:');

      topProdutosMasculino.sort((prod1, prod2) => (prod1.quantidade > prod2.quantidade) ? -1 : 1);
      console.log(`Produtos:`);

      let ordemProdMasculino = 1;

      topProdutosMasculino.forEach(prod => {
          console.log(`${ordemProdMasculino} - ${prod.nome}`);
          ordemProdMasculino++;
      });

      this.servicos.forEach(servico => {
          topServicosMasculino.push({ nome: servico.nome, valor: servico.preco, quantidade: 0 });
      });

      topServicosMasculino.forEach(serv => {
          this.clientes.forEach(cliente => {
              cliente.servicosConsumidos.forEach(servConsumido => {
                  if (servConsumido.nome == serv.nome) {
                      if (cliente.genero.toUpperCase() === 'M' || cliente.genero.toUpperCase() === 'MASCULINO') {
                          serv.quantidade = serv.quantidade + 1;
                      }
                  }
              });
          });
      });

      topServicosMasculino.sort((serv1, serv2) => (serv1.quantidade > serv2.quantidade) ? -1 : 1);
      console.log(`Serviços:`);

      let ordemServMasculino = 1;

      topServicosMasculino.forEach(serv => {
          console.log(`${ordemServMasculino} - ${serv.nome}`);
          ordemServMasculino++;
      });
  }
}