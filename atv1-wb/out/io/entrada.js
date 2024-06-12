"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var Entrada = /** @class */ (function () {
    function Entrada() {
    }
    Entrada.prototype.receberNumero = function (mensagem) {
        var prompt = (0, prompt_sync_1.default)();
        var valor = prompt(mensagem);
        var numero = new Number(valor);
        return numero.valueOf();
    };
    Entrada.prototype.receberData = function (mensagem) {
        var prompt = (0, prompt_sync_1.default)();
        var exe = true;
        while (exe) {
            var valor = prompt(mensagem);
            var data = valor.replace(/[^0-9]/g, '');
            if (valor == "") {
                console.log("Campo obrigatório.");
                exe = true;
            }
            else if (valor.replace(/[^0-9]/g, '').length < 8) {
                console.log("Campo maior  do que 8 dígitos, use apenas números.");
                exe = true;
            }
            else if (valor.replace(/[^0-9]/g, '').length > 8) {
                console.log("Campo menor do que 8 dígitos.");
                exe = true;
            }
            else if (Number(data.slice(0, 2)) > 31) {
                console.log("Dia inválido (o máximo é 31)");
                exe = true;
            }
            else if (Number(data.slice(2, 4)) > 12) {
                console.log("Mês somente até 12!");
                exe = true;
            }
            else if (Number(data.slice(2, 4)) == 2 && Number(data.slice(0, 2)) > 29) {
                console.log("Fevereiro tem até 29 dias");
                exe = true;
            }
            else {
                exe = false;
                return data.slice(0, 2) + "/" + data.slice(2, 4) + "/" + data.slice(4, 8);
            }
        }
        return "";
    };
    Entrada.prototype.receberCpf = function (mensagem) {
        var prompt = (0, prompt_sync_1.default)();
        var exe = true;
        while (exe) {
            var valor = prompt(mensagem);
            if (valor == "") {
                console.log("Campo Obrigatório.");
                exe = true;
            }
            else if (valor.replace(/[^0-9]/g, '').length < 11) {
                console.log("Campo maior do que 11 dígitos, use apenas números.");
                exe = true;
            }
            else if (valor.replace(/[^0-9]/g, '').length > 11) {
                console.log("Campo menor do que 11 dígitos, use apenas números.");
                exe = true;
            }
            else {
                exe = false;
                return valor.replace(/[^0-9]/g, '');
            }
        }
        return "";
    };
    Entrada.prototype.receberTexto = function (mensagem) {
        var prompt = (0, prompt_sync_1.default)();
        var exe = true;
        while (exe) {
            var texto = prompt(mensagem);
            var resto = texto.slice(1, texto.length);
            if (texto == "") {
                console.log("Campo Obrigatório!");
                exe = true;
            }
            else if (texto.length < 3) {
                console.log("Campo maior que 3 dígitos!");
                exe = true;
            }
            else {
                exe = false;
                return texto[0].toUpperCase() + resto.toLowerCase();
            }
        }
        return "Como conseguiu nosso contato?";
    };
    Entrada.prototype.receberGenero = function (mensagem) {
        var prompt = (0, prompt_sync_1.default)();
        var exe = true;
        while (exe) {
            var texto = prompt(mensagem);
            if (texto == "") {
                console.log("Campo Obrigatório!");
                exe = true;
            }
            else if (texto[0].toUpperCase() == 'M') {
                exe = false;
                return 'Masculino';
            }
            else if (texto[0].toUpperCase() == 'F') {
                exe = false;
                return 'Feminino';
            }
            else {
                console.log("Somente gênero Masculino e Feminino!");
                exe = true;
            }
        }
        return "Como conseguiu nosso contato?";
    };
    return Entrada;
}());
exports.default = Entrada;
