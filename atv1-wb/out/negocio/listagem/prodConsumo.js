"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProdutosMaisConsumidos = /** @class */ (function () {
    function ProdutosMaisConsumidos(clientes, produtos) {
        this.clientes = clientes;
        this.produtos = produtos;
    }
    ProdutosMaisConsumidos.prototype.listar = function () {
        var _this = this;
        var produtosMaisConsumidos = [];
        this.produtos.forEach(function (produto, index) {
            produtosMaisConsumidos.push({
                produto: produto.nome,
                quantidade: 0
            });
            _this.clientes.forEach(function (_a) {
                var produtosConsumidos = _a.getProdutosConsumidos;
                var quantidadeProdutosConsumidos = produtosConsumidos.filter(function (produtoConsumido) { return produtoConsumido.nome === produto.nome; }).length;
                produtosMaisConsumidos[index].quantidade += quantidadeProdutosConsumidos;
            });
        });
        console.log("\nProdutos mais consumidos :");
        console.table(produtosMaisConsumidos.sort(function (a, b) { return b.quantidade = a.quantidade; }).slice(0, 1));
        console.log("\n");
    };
    return ProdutosMaisConsumidos;
}());
exports.default = ProdutosMaisConsumidos;
