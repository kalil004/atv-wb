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
var cliente_1 = __importDefault(require("../../modelo/cliente"));
var cpf_1 = __importDefault(require("../../modelo/cpf"));
var rg_1 = __importDefault(require("../../modelo/rg"));
var cadastro_1 = __importDefault(require("../cadastro"));
var CadastroCliente = /** @class */ (function (_super) {
    __extends(CadastroCliente, _super);
    function CadastroCliente(cliente) {
        var _this = _super.call(this) || this;
        _this.cliente = cliente;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroCliente.prototype.cadastrar = function () {
        console.log("\n Cadastro do cliente");
        var nome = this.entrada.receberTexto("Insira o nome do cliente: ");
        var nomeSocial = this.entrada.receberTexto("Insira o nome social do cliente: ");
        var genero = this.entrada.receberGenero("Insira o g\u00EAnero do cliente: ['M' ou 'F'] ");
        var rgValor = this.entrada.receberTexto("Insira o RG do cliente: ");
        var dataRg = this.entrada.receberData("Insira a data de emiss\u00E3o do RG(dd/mm/yyyy): ");
        var partesDataRg = dataRg.split('/');
        var anoRg = new Number(partesDataRg[2].valueOf()).valueOf();
        var mesRg = new Number(partesDataRg[1].valueOf()).valueOf();
        var diaRg = new Number(partesDataRg[0].valueOf()).valueOf();
        var dataEmissaoRg = new Date(anoRg, mesRg, diaRg);
        var valor = this.entrada.receberCpf("Insira o n\u00FAmero do cpf (00000000000): ");
        var data = this.entrada.receberData("Insira a data de emiss\u00E3o do cpf (dd/mm/yyyy): ");
        var partesData = data.split('/');
        var ano = new Number(partesData[2].valueOf()).valueOf();
        var mes = new Number(partesData[1].valueOf()).valueOf();
        var dia = new Number(partesData[0].valueOf()).valueOf();
        var dataEmissao = new Date(ano, mes, dia);
        var cpf = new cpf_1.default(valor, dataEmissao);
        var rg = new rg_1.default(rgValor, dataEmissaoRg);
        var cliente = new cliente_1.default(nome, nomeSocial, cpf, genero);
        cliente.addRg(rg);
        this.cliente.push(cliente);
        console.log("\nCadastro conclu\u00EDdo.\n");
    };
    return CadastroCliente;
}(cadastro_1.default));
exports.default = CadastroCliente;
