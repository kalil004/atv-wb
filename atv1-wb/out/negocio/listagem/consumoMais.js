"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClientesMaisConsumo = /** @class */ (function () {
    function ClientesMaisConsumo(cliente) {
        this.cliente = cliente;
    }
    ClientesMaisConsumo.prototype.listar = function () {
        var consumoCliente = this.cliente.map(function (_a) {
            var nome = _a.nome, produtosConsumidos = _a.getProdutosConsumidos;
            return ({
                nome: nome,
                quantidadeConsumo: produtosConsumidos.length
            });
        });
        var consumoClienteSort = consumoCliente.sort(function (a, b) { return b.quantidadeConsumo - a.quantidadeConsumo; });
        console.log("\nTop 10 clientes que mais consumiram:");
        console.table(consumoClienteSort.slice(0, 10));
        console.log("\n");
    };
    return ClientesMaisConsumo;
}());
exports.default = ClientesMaisConsumo;
