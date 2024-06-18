import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import CadastroCliente from "../negocio/cliente/cadastroCliente";
import CadastroProduto from "../negocio/produto/cadastroProduto";
import CadastroServicos from "../negocio/serviço/cadastroServiço";
import ListagemClientes from "../negocio/cliente/listagemClientes";
import ListagemProdutos from "../negocio/produto/listagemProdutos";
import ListagemServicos from "../negocio/serviço/listagemServiços";
import AtualizarCliente from "../negocio/cliente/atualizarCliente";
import AtualizarProduto from "../negocio/produto/atualizarProduto";
import AtualizarServiço from "../negocio/serviço/atualizarServiço";
import ApagarCliente from "../negocio/cliente/deletarCliente";
import ApagarProduto from "../negocio/produto/deletarProduto";
import ApagarServiço from "../negocio/serviço/deletarServiço";
import ClientesMaisConsumo from "../negocio/listagem/consumoMais";
import ClientesMenosConsumo from "../negocio/listagem/consumoMenos";
import ClientesValor from "../negocio/listagem/valorClientes";
import ClientesPorGenero from "../negocio/listagem/clientesGen";
import MaisConsumidosGenero from "../negocio/listagem/consumoMaisGen";
import ProdutosMaisConsumidos from "../negocio/listagem/prodConsumo";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`);
let empresa = new Empresa();
let execucao = true;

for (let i = 1; i <= 30; i++) {
    let cpf = new CPF(`00000000000`, new Date());
    let rg = new RG(`0000000000`, new Date());
    let telefone = new Telefone(`12`, `99123-4567`);
    
    let numProdutosConsumidos = Math.floor(Math.random() * empresa.getProdutos.length) + 1;
    let produtosConsumidos = empresa.getProdutos.slice(0, numProdutosConsumidos);

    let numServicosConsumidos = Math.floor(Math.random() * empresa.getServicos.length) + 1;
    let servicosConsumidos = empresa.getServicos.slice(0, numServicosConsumidos);

    let genero = i % 2 === 0 ? 'Masculino' : 'Feminino';

    let cliente = new Cliente(
        `Cliente ${i}`,
        `Nome Social ${i}`,
        cpf,
        genero
    );

    cliente.addRg(rg);
    cliente.addTelefones(telefone);

    produtosConsumidos.forEach(produto => {
        let numConsumos = Math.floor(Math.random() * 5) + 1;
        for (let j = 0; j < numConsumos; j++) {
            cliente.addProduto(produto);
        }
    });

    servicosConsumidos.forEach(servico => {
        let numConsumos = Math.floor(Math.random() * 3) + 1; 
        for (let j = 0; j < numConsumos; j++) {
            cliente.addServico(servico);
        }
    });

    empresa.getClientes.push(cliente);
}

for (let i = 1; i <= 20; i++) {
    empresa.getProdutos.push(new Produto(`Produto ${i}`, Math.random() * 10));
}

for (let i = 1; i <= 20; i++) {
    empresa.getServicos.push(new Servico(`Serviço ${i}`, Math.random() * 10));
}


while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Atualizar cliente `);
    console.log(`4 - Deletar cliente `);
    console.log(`5 - Cadastrar produto `);
    console.log(`6 - Listar todos os produtos `);
    console.log(`7 - Atualizar produto `);
    console.log(`8 - Deletar cliente `);
    console.log(`9 - Cadastrar serviço `);
    console.log(`10 - Listar todos os serviços `);
    console.log(`11 - Atualizar serviço `);
    console.log(`12 - Deletar serviço `);
    console.log(`13 - Clientes que mais consumiram `);
    console.log(`14 - Clientes que menos consumiram `);
    console.log(`15 - Clientes que mais consumiram (em valor) `);
    console.log(`16 - Clientes por gênero `);
    console.log(`17 - Produtos mais consumidos por gênero `);
    console.log(`18 - Produtos mais consumidos `);
    console.log(`19 - Sair `);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastroCliente = new CadastroCliente(empresa.getClientes)
            cadastroCliente.cadastrar()
            break;
        case 2:
            let listagemCliente = new ListagemClientes(empresa.getClientes)
            listagemCliente.listar()
            break;
        case 3:
            let updateCliente = new AtualizarCliente(empresa.getClientes)
            updateCliente.atualizar()
            break;
        case 4: 
            let deleteCliente = new ApagarCliente(empresa.getClientes)
            deleteCliente.deletar()
        case 5:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 6:
            let ListagemProduto = new ListagemProdutos(empresa.getProdutos)
            ListagemProduto.listar()
            break;
        case 7:
            let updateProduto = new AtualizarProduto(empresa.getProdutos)
            updateProduto.atualizar()
            break;
        case 8:
            let deleteProduto = new ApagarProduto(empresa.getProdutos)
            deleteProduto.deletar()
            break;
        case 9:
            let cadastroServiço = new CadastroServicos(empresa.getServicos)
            cadastroServiço.cadastrar()
            break;
        case 10:
            let listagemServico = new ListagemServicos(empresa.getServicos)
            listagemServico.listar()
            break;
        case 11:
            let updateServico = new AtualizarServiço(empresa.getServicos)
            updateServico.atualizar()
            break;
        case 12:
            let deleteServiço = new ApagarServiço(empresa.getServicos)
            deleteServiço.deletar()
            break;
        case 13:
            let maisConsumo = new ClientesMaisConsumo(empresa.getClientes)
            maisConsumo.listar()
            break;
        case 14:
            let menosConsumo = new ClientesMenosConsumo(empresa.getClientes)
            menosConsumo.listar()
            break;
        case 15:
            let valor = new ClientesValor(empresa.getClientes, empresa.getProdutos)
            valor.listar()
            break;
        case 16:
            let clientesGenero = new ClientesPorGenero(empresa.getClientes)
            clientesGenero.listar()
            break;
        case 17:
            let consumoGenero = new MaisConsumidosGenero(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            consumoGenero.listar()
            break;
        case 18:
            let consumoProduto = new ProdutosMaisConsumidos(empresa.getClientes, empresa.getProdutos)
            consumoProduto.listar()
            break;
        case 19:
            execucao = false
            console.log(`Até mais.`)
            break;
        default:
            console.log(`Operação não disponível ou não existente.`)
    }
}