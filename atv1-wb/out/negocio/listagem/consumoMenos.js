"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClientesMenosConsumo = /** @class */ (function () {
    function ClientesMenosConsumo(cliente) {
        this.cliente = cliente;
    }
    ClientesMenosConsumo.prototype.listar = function () {
        var consumoCliente = this.cliente.map(function (_a) {
            var nome = _a.nome, produtosConsumidos = _a.getProdutosConsumidos;
            return ({
                nome: nome,
                quantidadeConsumo: produtosConsumidos.length
            });
        });
        var consumoClienteSort = consumoCliente.sort(function (a, b) { return a.quantidadeConsumo - b.quantidadeConsumo; });
        console.log("\nTop 10 clientes que menos consumiram:");
        console.table(consumoClienteSort.slice(0, 10));
        console.log("\n");
    };
    return ClientesMenosConsumo;
}());
exports.default = ClientesMenosConsumo;
