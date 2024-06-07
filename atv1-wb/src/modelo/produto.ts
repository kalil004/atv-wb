export default class Produto {
    public nome: string
    public preco: number
    public consumo: number
    constructor(nome: string, preco: number){
        this.nome = nome
        this.preco = preco
        this.consumo = 0
    }
    public getNome(): string{
        return this.nome
    }
    public getPreco(): number{
        return this.preco
    }
    public addConsumo(){
        this.consumo += 1
    }

}