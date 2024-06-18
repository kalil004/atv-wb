"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var listagem_1 = __importDefault(require("../listagem"));
var MaisConsumidosGenero = /** @class */ (function (_super) {
    __extends(MaisConsumidosGenero, _super);
    function MaisConsumidosGenero(clientes, produtos, servicos) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.produtos = produtos;
        _this.servicos = servicos;
        return _this;
    }
    MaisConsumidosGenero.prototype.listar = function () {
        var _this = this;
        console.log('Produtos e Serviços mais consumidos por gênero:');
        var topProdutosFeminino = [];
        var topServicosFeminino = [];
        var topProdutosMasculino = [];
        var topServicosMasculino = [];
        console.log('Feminino');
        this.produtos.forEach(function (produto) {
            topProdutosFeminino.push({ nome: produto.nome, valor: produto.preco, quantidade: 0 });
        });
        topProdutosFeminino.forEach(function (prod) {
            _this.clientes.forEach(function (cliente) {
                cliente.produtosConsumidos.forEach(function (prodConsumido) {
                    if (prodConsumido.nome == prod.nome) {
                        if (cliente.genero.toUpperCase() === 'F' || cliente.genero.toUpperCase() === 'FEMININO') {
                            prod.quantidade = prod.quantidade + 1;
                        }
                    }
                });
            });
        });
        topProdutosFeminino.sort(function (prod1, prod2) { return (prod1.quantidade > prod2.quantidade) ? -1 : 1; });
        console.log("Produtos:");
        var ordemProdFeminino = 1;
        topProdutosFeminino.forEach(function (prod) {
            console.log("".concat(ordemProdFeminino, " - ").concat(prod.nome));
            ordemProdFeminino++;
        });
        this.servicos.forEach(function (servico) {
            topServicosFeminino.push({ nome: servico.nome, valor: servico.preco, quantidade: 0 });
        });
        topServicosFeminino.forEach(function (serv) {
            _this.clientes.forEach(function (cliente) {
                cliente.servicosConsumidos.forEach(function (servConsumido) {
                    if (servConsumido.nome == serv.nome) {
                        if (cliente.genero.toUpperCase() === 'F' || cliente.genero.toUpperCase() === 'FEMININO') {
                            serv.quantidade = serv.quantidade + 1;
                        }
                    }
                });
            });
        });
        topServicosFeminino.sort(function (serv1, serv2) { return (serv1.quantidade > serv2.quantidade) ? -1 : 1; });
        console.log("Servi\u00E7os:");
        var ordemServFeminino = 1;
        topServicosFeminino.forEach(function (serv) {
            console.log("".concat(ordemServFeminino, " - ").concat(serv.nome));
            ordemServFeminino++;
        });
        this.produtos.forEach(function (produto) {
            topProdutosMasculino.push({ nome: produto.nome, valor: produto.preco, quantidade: 0 });
        });
        topProdutosMasculino.forEach(function (prod) {
            _this.clientes.forEach(function (cliente) {
                cliente.produtosConsumidos.forEach(function (prodConsumido) {
                    if (prodConsumido.nome == prod.nome) {
                        if (cliente.genero.toUpperCase() === 'M' || cliente.genero.toUpperCase() === 'MASCULINO') {
                            prod.quantidade = prod.quantidade + 1;
                        }
                    }
                });
            });
        });
        console.log('Gênero Masculino:');
        topProdutosMasculino.sort(function (prod1, prod2) { return (prod1.quantidade > prod2.quantidade) ? -1 : 1; });
        console.log("Produtos:");
        var ordemProdMasculino = 1;
        topProdutosMasculino.forEach(function (prod) {
            console.log("".concat(ordemProdMasculino, " - ").concat(prod.nome));
            ordemProdMasculino++;
        });
        this.servicos.forEach(function (servico) {
            topServicosMasculino.push({ nome: servico.nome, valor: servico.preco, quantidade: 0 });
        });
        topServicosMasculino.forEach(function (serv) {
            _this.clientes.forEach(function (cliente) {
                cliente.servicosConsumidos.forEach(function (servConsumido) {
                    if (servConsumido.nome == serv.nome) {
                        if (cliente.genero.toUpperCase() === 'M' || cliente.genero.toUpperCase() === 'MASCULINO') {
                            serv.quantidade = serv.quantidade + 1;
                        }
                    }
                });
            });
        });
        topServicosMasculino.sort(function (serv1, serv2) { return (serv1.quantidade > serv2.quantidade) ? -1 : 1; });
        console.log("Servi\u00E7os:");
        var ordemServMasculino = 1;
        topServicosMasculino.forEach(function (serv) {
            console.log("".concat(ordemServMasculino, " - ").concat(serv.nome));
            ordemServMasculino++;
        });
    };
    return MaisConsumidosGenero;
}(listagem_1.default));
exports.default = MaisConsumidosGenero;
