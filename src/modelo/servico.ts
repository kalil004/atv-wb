export default class Servico {
    public nome!: string
    public preco!: number
    public consumo !: number
    constructor(nome: string, preco: number){
        this.nome = nome
        this.preco = preco
        this.consumo = 0
    }
    getNomeS(): string{
        return this.nome
    }
    getPrecos(): number{
        return this.preco
    }
    public addConsumo(){
        this.consumo += 1
    }
}