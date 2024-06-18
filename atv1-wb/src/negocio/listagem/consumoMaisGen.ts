import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class MaisConsumidosGenero implements Listagem {
    private clientes: Array<Cliente>;
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
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


        this.produtos.forEach(produto => {
            topProdutosFeminino.push({ nome: produto.nome, valor: produto.preco, quantidade: 0 });
            topProdutosMasculino.push({ nome: produto.nome, valor: produto.preco, quantidade: 0 });
        });


        this.servicos.forEach(servico => {
            topServicosFeminino.push({ nome: servico.nome, valor: servico.preco, quantidade: 0 });
            topServicosMasculino.push({ nome: servico.nome, valor: servico.preco, quantidade: 0 });
        });


        this.clientes.forEach(cliente => {
            if (cliente.genero.toUpperCase() === 'F' || cliente.genero.toUpperCase() === 'FEMININO') {
                cliente.produtosConsumidos.forEach(prodConsumido => {
                    const index = topProdutosFeminino.findIndex(prod => prod.nome === prodConsumido.nome);
                    if (index !== -1) {
                        topProdutosFeminino[index].quantidade++;
                    }
                });

                cliente.servicosConsumidos.forEach(servConsumido => {
                    const index = topServicosFeminino.findIndex(serv => serv.nome === servConsumido.nome);
                    if (index !== -1) {
                        topServicosFeminino[index].quantidade++;
                    }
                });
            }
        });

        topProdutosFeminino.sort((prod1, prod2) => (prod1.quantidade > prod2.quantidade) ? -1 : 1);
        console.log(`\nProdutos mais consumidos pelo gênero feminino:`);
        let ordemProdFeminino = 1;
        topProdutosFeminino.forEach(prod => {
            console.log(`${ordemProdFeminino} - ${prod.nome}`);
            ordemProdFeminino++;
        });

        topServicosFeminino.sort((serv1, serv2) => (serv1.quantidade > serv2.quantidade) ? -1 : 1);
        console.log(`\nServiços mais consumidos pelo gênero feminino:`);
        let ordemServFeminino = 1;
        topServicosFeminino.forEach(serv => {
            console.log(`${ordemServFeminino} - ${serv.nome}`);
            ordemServFeminino++;
        });

        this.clientes.forEach(cliente => {
            if (cliente.genero.toUpperCase() === 'M' || cliente.genero.toUpperCase() === 'MASCULINO') {
                cliente.produtosConsumidos.forEach(prodConsumido => {
                    const index = topProdutosMasculino.findIndex(prod => prod.nome === prodConsumido.nome);
                    if (index !== -1) {
                        topProdutosMasculino[index].quantidade++;
                    }
                });

                cliente.servicosConsumidos.forEach(servConsumido => {
                    const index = topServicosMasculino.findIndex(serv => serv.nome === servConsumido.nome);
                    if (index !== -1) {
                        topServicosMasculino[index].quantidade++;
                    }
                });
            }
        });

        topProdutosMasculino.sort((prod1, prod2) => (prod1.quantidade > prod2.quantidade) ? -1 : 1);
        console.log(`\nProdutos mais consumidos por gênero masculino:`);
        let ordemProdMasculino = 1;
        topProdutosMasculino.forEach(prod => {
            console.log(`${ordemProdMasculino} - ${prod.nome}`);
            ordemProdMasculino++;
        });

        topServicosMasculino.sort((serv1, serv2) => (serv1.quantidade > serv2.quantidade) ? -1 : 1);
        console.log(`\nServiços mais consumidos por gênero masculino:`);
        let ordemServMasculino = 1;
        topServicosMasculino.forEach(serv => {
            console.log(`${ordemServMasculino} - ${serv.nome}`);
            ordemServMasculino++;
        });
    }
}
