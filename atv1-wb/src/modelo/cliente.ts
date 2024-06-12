import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    public genero: string
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    public produtosConsumidos: Array<Produto>
    public servicosConsumidos: Array<Servico>
    constructor(nome: string, nomeSocial: string, cpf: CPF, genero: string) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.genero = genero
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public getGenero(): string {
        return this.genero;
    }
    public addRg(rg: RG){
        this.rgs.push(rg)
    }

    public addTelefones(telefone: Telefone) {
        this.telefones.push(telefone);
    }

    public addProduto(produto: Produto){
        this.produtosConsumidos.push(produto)
        produto.addConsumo()
    }

    public addServico(servico: Servico){
        this.servicosConsumidos.push(servico)
        servico.addConsumo()
    }

    public setGenero(): string{
        switch(this.genero){
            case 'Masculino':
                return 'M - Masculino'
            case 'Feminino': 
                return 'F - Feminino'
            default:
                return 'Indefinido'
        }
    }

    public getGeneroMF(): string{
        return this.genero
    }
}