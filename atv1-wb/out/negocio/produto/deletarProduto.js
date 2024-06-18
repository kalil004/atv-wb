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
var deletar_1 = __importDefault(require("../deletar"));
var execute = true;
var ApagarProduto = /** @class */ (function (_super) {
    __extends(ApagarProduto, _super);
    function ApagarProduto(produto) {
        var _this = _super.call(this) || this;
        _this.produto = produto;
        _this.entrada = new entrada_1.default;
        return _this;
    }
    ApagarProduto.prototype.deletar = function () {
        var _this = this;
        console.log("\n Remo\u00E7\u00E3o de produto");
        execute = true;
        var _loop_1 = function () {
            var seleçao = this_1.entrada.receberTexto('Informe o nome do produto: ');
            var count = 1;
            this_1.produto.forEach(function (produto) {
                if (produto.nome == seleçao) {
                    console.log("Produto selecionado: ".concat(produto.nome, "\n Deseja mesmo apagar este produto?"));
                    var confirmar = _this.entrada.receberNumero('1 - Excluir \n2- Cancelar');
                    switch (confirmar) {
                        case 1:
                            var index = _this.produto.indexOf(produto);
                            _this.produto.splice(index, 1);
                            console.log('Produto removido com sucesso.');
                            execute = false;
                            break;
                        case 2:
                            execute = false;
                            console.log('Operação cancelada.');
                            break;
                    }
                }
                else if (count == _this.produto.length) {
                    console.log('\n O produto não existe. \n');
                    execute = false;
                }
                else {
                    count++;
                }
            });
        };
        var this_1 = this;
        while (execute) {
            _loop_1();
        }
    };
    return ApagarProduto;
}(deletar_1.default));
exports.default = ApagarProduto;
