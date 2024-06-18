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
var AtualizarCliente = /** @class */ (function (_super) {
    __extends(AtualizarCliente, _super);
    function AtualizarCliente(cliente) {
        var _this = _super.call(this) || this;
        _this.cliente = cliente;
        _this.entrada = new entrada_1.default;
        return _this;
    }
    AtualizarCliente.prototype.atualizar = function () {
        var _this = this;
        console.log('\n Atualização de cliente');
        var seleçao = this.entrada.receberTexto('Informe o CPF do cliente: ');
        var count = 1;
        this.cliente.forEach(function (cliente) {
            if (cliente.getCpf.getValor == seleçao) {
                console.log('Cliente selecionado, atualize os dados;');
                var nome = _this.entrada.receberTexto('Digite o nome do cliente selecionado: ');
                var nomeSocial = _this.entrada.receberTexto('Digite o nome social do cliente selecionado: ');
                cliente.nome = nome;
                cliente.nomeSocial = nomeSocial;
                console.log('\nCliente atualizado.\n');
            }
            else if (count == _this.cliente.length) {
                console.log('\nO cliente não existe.\n');
            }
            else {
                count++;
            }
        });
    };
    return AtualizarCliente;
}(atualizar_1.default));
exports.default = AtualizarCliente;
