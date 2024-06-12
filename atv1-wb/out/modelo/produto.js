"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this.nome = nome;
        this.preco = preco;
        this.consumo = 0;
    }
    Produto.prototype.getNome = function () {
        return this.nome;
    };
    Produto.prototype.getPreco = function () {
        return this.preco;
    };
    Produto.prototype.addConsumo = function () {
        this.consumo += 1;
    };
    return Produto;
}());
exports.default = Produto;
