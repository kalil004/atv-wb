"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = __importDefault(require("../io/entrada"));
var empresa_1 = __importDefault(require("../modelo/empresa"));
var cliente_1 = __importDefault(require("../modelo/cliente"));
var produto_1 = __importDefault(require("../modelo/produto"));
var servico_1 = __importDefault(require("../modelo/servico"));
var cadastroCliente_1 = __importDefault(require("../negocio/cliente/cadastroCliente"));
var cadastroProduto_1 = __importDefault(require("../negocio/produto/cadastroProduto"));
var cadastroServi_o_1 = __importDefault(require("../negocio/servi\u00E7o/cadastroServi\u00E7o"));
var listagemClientes_1 = __importDefault(require("../negocio/cliente/listagemClientes"));
var listagemProdutos_1 = __importDefault(require("../negocio/produto/listagemProdutos"));
var listagemServi_os_1 = __importDefault(require("../negocio/servi\u00E7o/listagemServi\u00E7os"));
var atualizarCliente_1 = __importDefault(require("../negocio/cliente/atualizarCliente"));
var atualizarProduto_1 = __importDefault(require("../negocio/produto/atualizarProduto"));
var atualizarServi_o_1 = __importDefault(require("../negocio/servi\u00E7o/atualizarServi\u00E7o"));
var deletarCliente_1 = __importDefault(require("../negocio/cliente/deletarCliente"));
var deletarProduto_1 = __importDefault(require("../negocio/produto/deletarProduto"));
var deletarServi_o_1 = __importDefault(require("../negocio/servi\u00E7o/deletarServi\u00E7o"));
var consumoMais_1 = __importDefault(require("../negocio/listagem/consumoMais"));
var consumoMenos_1 = __importDefault(require("../negocio/listagem/consumoMenos"));
var valorClientes_1 = __importDefault(require("../negocio/listagem/valorClientes"));
var clientesGen_1 = __importDefault(require("../negocio/listagem/clientesGen"));
var consumoMaisGen_1 = __importDefault(require("../negocio/listagem/consumoMaisGen"));
var prodConsumo_1 = __importDefault(require("../negocio/listagem/prodConsumo"));
var cpf_1 = __importDefault(require("../modelo/cpf"));
var rg_1 = __importDefault(require("../modelo/rg"));
var telefone_1 = __importDefault(require("../modelo/telefone"));
console.log("Bem-vindo ao cadastro de clientes do Grupo World Beauty");
var empresa = new empresa_1.default();
var execucao = true;
var _loop_1 = function (i) {
    var cpf = new cpf_1.default("00000000000", new Date());
    var rg = new rg_1.default("0000000000", new Date());
    var telefone = new telefone_1.default("12", "99123-4567");
    var produtosConsumidos = empresa.getProdutos.slice(0, Math.floor(Math.random() * empresa.getProdutos.length));
    var servicosConsumidos = empresa.getServicos.slice(0, Math.floor(Math.random() * empresa.getServicos.length));
    var genero = i % 2 === 0 ? 'Masculino' : 'Feminino';
    var cliente = new cliente_1.default("Cliente ".concat(i), "Nome Social ".concat(i), cpf, genero);
    cliente.addRg(rg);
    cliente.addTelefones(telefone);
    produtosConsumidos.forEach(function (produto) { return cliente.addProduto(produto); });
    servicosConsumidos.forEach(function (servico) { return cliente.addServico(servico); });
    empresa.getClientes.push(cliente);
};
for (var i = 1; i <= 30; i++) {
    _loop_1(i);
}
for (var i = 1; i <= 20; i++) {
    empresa.getProdutos.push(new produto_1.default("Produto ".concat(i), Math.random() * 10));
}
for (var i = 1; i <= 20; i++) {
    empresa.getServicos.push(new servico_1.default("Servi\u00E7o ".concat(i), Math.random() * 10));
}
while (execucao) {
    console.log("Op\u00E7\u00F5es:");
    console.log("1 - Cadastrar cliente");
    console.log("2 - Listar todos os clientes");
    console.log("3 - Atualizar cliente ");
    console.log("4 - Deletar cliente ");
    console.log("5 - Cadastrar produto ");
    console.log("6 - Listar todos os produtos ");
    console.log("7 - Atualizar produto ");
    console.log("8 - Deletar cliente ");
    console.log("9 - Cadastrar servi\u00E7o ");
    console.log("10 - Listar todos os servi\u00E7os ");
    console.log("11 - Atualizar servi\u00E7o ");
    console.log("12 - Deletar servi\u00E7o ");
    console.log("13 - Clientes que mais consumiram ");
    console.log("14 - Clientes que menos consumiram ");
    console.log("15 - Clientes que mais consumiram (em valor) ");
    console.log("16 - Clientes por g\u00EAnero ");
    console.log("17 - Produtos mais consumidos por g\u00EAnero ");
    console.log("18 - Produtos mais consumidos ");
    console.log("19 - Sair ");
    var entrada = new entrada_1.default();
    var opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
    switch (opcao) {
        case 1:
            var cadastroCliente = new cadastroCliente_1.default(empresa.getClientes);
            cadastroCliente.cadastrar();
            break;
        case 2:
            var listagemCliente = new listagemClientes_1.default(empresa.getClientes);
            listagemCliente.listar();
            break;
        case 3:
            var updateCliente = new atualizarCliente_1.default(empresa.getClientes);
            updateCliente.atualizar();
            break;
        case 4:
            var deleteCliente = new deletarCliente_1.default(empresa.getClientes);
            deleteCliente.deletar();
        case 5:
            var cadastroProduto = new cadastroProduto_1.default(empresa.getProdutos);
            cadastroProduto.cadastrar();
            break;
        case 6:
            var ListagemProduto = new listagemProdutos_1.default(empresa.getProdutos);
            ListagemProduto.listar();
            break;
        case 7:
            var updateProduto = new atualizarProduto_1.default(empresa.getProdutos);
            updateProduto.atualizar();
            break;
        case 8:
            var deleteProduto = new deletarProduto_1.default(empresa.getProdutos);
            deleteProduto.deletar();
            break;
        case 9:
            var cadastroServiço = new cadastroServi_o_1.default(empresa.getServicos);
            cadastroServiço.cadastrar();
            break;
        case 10:
            var listagemServico = new listagemServi_os_1.default(empresa.getServicos);
            listagemServico.listar();
            break;
        case 11:
            var updateServico = new atualizarServi_o_1.default(empresa.getServicos);
            updateServico.atualizar();
            break;
        case 12:
            var deleteServiço = new deletarServi_o_1.default(empresa.getServicos);
            deleteServiço.deletar();
            break;
        case 13:
            var maisConsumo = new consumoMais_1.default(empresa.getClientes);
            maisConsumo.listar();
            break;
        case 14:
            var menosConsumo = new consumoMenos_1.default(empresa.getClientes);
            menosConsumo.listar();
            break;
        case 15:
            var valor = new valorClientes_1.default(empresa.getClientes, empresa.getProdutos);
            valor.listar();
            break;
        case 16:
            var clientesGenero = new clientesGen_1.default(empresa.getClientes);
            clientesGenero.listar();
            break;
        case 17:
            var consumoGenero = new consumoMaisGen_1.default(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            consumoGenero.listar();
            break;
        case 18:
            var consumoProduto = new prodConsumo_1.default(empresa.getClientes, empresa.getProdutos);
            consumoProduto.listar();
        case 19:
            execucao = false;
            console.log("At\u00E9 mais.");
            break;
        default:
            console.log("Opera\u00E7\u00E3o n\u00E3o dispon\u00EDvel ou n\u00E3o existente.");
    }
}
