"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClientesPorGenero = /** @class */ (function () {
    function ClientesPorGenero(cliente) {
        this.cliente = cliente;
    }
    ClientesPorGenero.prototype.listar = function () {
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
    return ClientesPorGenero;
}());
exports.default = ClientesPorGenero;
