"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClientesValor = /** @class */ (function () {
    function ClientesValor(cliente, produto) {
        this.cliente = cliente;
        this.produto = produto;
    }
    ClientesValor.prototype.listar = function () {
        var _this = this;
        var consumoValor = this.cliente.map(function (_a) {
            var nome = _a.nome, produtosConsumidos = _a.getProdutosConsumidos;
            return ({
                nome: nome,
                valorConsumo: _this.somar(produtosConsumidos)
            });
        });
        var consumoClienteOrdenado = consumoValor.sort(function (a, b) { return b.valorConsumo - a.valorConsumo; });
        console.log("\n Top 5 clientes que mais consumiram por pre\u00E7o: ");
        console.table(consumoClienteOrdenado.slice(0, 5));
        console.log("\n");
    };
    ClientesValor.prototype.somar = function (produtos) {
        var total = 0;
        produtos.forEach(function (prod) {
            total = +prod.getPreco;
        });
        return total;
    };
    return ClientesValor;
}());
exports.default = ClientesValor;
