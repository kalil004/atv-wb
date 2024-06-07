import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private cliente: Array<Cliente>
    private entrada: Entrada
    constructor(cliente: Array<Cliente>) {
        super()
        this.cliente = cliente
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        
        console.log(`\n Cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Insira o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Insira o nome social do cliente: `)
        let genero = this.entrada.receberGenero(`Insira o gênero do cliente: ['M' ou 'F'] `)
        let rgValor = this.entrada.receberTexto(`Insira o RG do cliente: `)
        let dataRg = this.entrada.receberData(`Insira a data de emissão do RG(dd/mm/yyyy): `)
        let partesDataRg = dataRg.split('/')
        let anoRg = new Number(partesDataRg[2].valueOf()).valueOf()
        let mesRg = new Number(partesDataRg[1].valueOf()).valueOf()
        let diaRg = new Number(partesDataRg[0].valueOf()).valueOf()
        let dataEmissaoRg = new Date(anoRg, mesRg, diaRg)
        let valor = this.entrada.receberCpf(`Insira o número do cpf (00000000000): `);
        let data = this.entrada.receberData(`Insira a data de emissão do cpf (dd/mm/yyyy): `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)

        let cpf = new CPF(valor, dataEmissao);
        let rg = new RG(rgValor, dataEmissaoRg)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero);
        cliente.addRg(rg)
        this.cliente.push(cliente)
        console.log(`\nCadastro concluído.)\n`);
        }
        
}