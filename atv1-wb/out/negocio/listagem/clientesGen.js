"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListarClientesPorGenero = /** @class */ (function () {
    function ListarClientesPorGenero(cliente) {
        this.cliente = cliente;
    }
    ListarClientesPorGenero.prototype.listar = function () {
        var clientesPorGenero = this.cliente.map(function (_a) {
            var nome = _a.nome, genero = _a.genero;
            return ({
                masculino: genero === 'M' ? nome : '',
                feminino: genero === 'F ' ? nome : ''
            });
        });
        console.log("\nTodos os clientes por g\u00EAnero:");
        console.table(clientesPorGenero);
        console.log("\n");
    };
    return ListarClientesPorGenero;
}());
exports.default = ListarClientesPorGenero;
