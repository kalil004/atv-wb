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
var entrada_1 = __importDefault(require("../../io/entrada"));
var atualizar_1 = __importDefault(require("../atualizar"));
var AtualizarProduto = /** @class */ (function (_super) {
    __extends(AtualizarProduto, _super);
    function AtualizarProduto(produto) {
        var _this = _super.call(this) || this;
        _this.produto = produto;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    AtualizarProduto.prototype.atualizar = function () {
        var _this = this;
        var count = 1;
        console.log('\n Atualização de produto');
        var seleção = this.entrada.receberTexto('Insira o nome do produto: ');
        this.produto.forEach(function (produto) {
            if (produto.nome == seleção) {
                console.log('Produto selecionado.');
                var nome = _this.entrada.receberTexto('Nome novo do produto: ');
                produto.nome = nome;
                console.log('\n Atualização concluída. ');
            }
            else if (count == _this.produto.length) {
                console.log('O produto não existe.');
            }
            else {
                count++;
            }
        });
    };
    return AtualizarProduto;
}(atualizar_1.default));
exports.default = AtualizarProduto;
