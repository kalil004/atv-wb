"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Servico = /** @class */ (function () {
    function Servico(nome, preco) {
        this.nome = nome;
        this.preco = preco;
        this.consumo = 0;
    }
    Servico.prototype.getNomeS = function () {
        return this.nome;
    };
    Servico.prototype.getPrecos = function () {
        return this.preco;
    };
    Servico.prototype.addConsumo = function () {
        this.consumo += 1;
    };
    return Servico;
}());
exports.default = Servico;
