import promptSync from "prompt-sync";
export default class Entrada {
    public receberNumero(mensagem: string): number {
        let prompt = promptSync();
        let valor = prompt(mensagem)
        let numero  = new Number(valor)
        return numero.valueOf()
    }
    public receberData(mensagem: string): string{
        let prompt = promptSync();
        let exe = true
        while (exe) {
            let valor = prompt(mensagem)
            let data = valor.replace(/[^0-9]/g,'')
            if(valor == ""){
                console.log("Campo obrigatório.");
                exe = true
            }else if(valor.replace(/[^0-9]/g,'').length < 8){
                console.log("Campo maior  do que 8 dígitos, use apenas números.");
                exe = true
            }else if(valor.replace(/[^0-9]/g,'').length > 8){
                console.log("Campo menor do que 8 dígitos.")
                exe = true
            }else if(Number(data.slice(0,2)) > 31){
                console.log("Dia inválido (o máximo é 31)");
                exe = true
            }else if(Number(data.slice(2, 4)) > 12){
                console.log("Mês somente até 12!");
                exe = true
            }else if(Number(data.slice(2, 4)) == 2 && Number(data.slice(0,2)) > 29){
                console.log("Fevereiro tem até 29 dias");
                exe = true
            }else{                
                exe = false
                return data.slice(0,2) + "/" + data.slice(2, 4) + "/" + data.slice(4,8)
            }
        }
        return ""
    }
    public receberCpf(mensagem: string): string{
        let prompt = promptSync();
        let exe = true
        while (exe) {
            let valor = prompt(mensagem)
            if(valor == ""){
                console.log("Campo Obrigatório.");
                exe = true
            }else if(valor.replace(/[^0-9]/g,'').length < 11){
                console.log("Campo maior do que 11 dígitos, use apenas números.");
                exe = true
            }else if(valor.replace(/[^0-9]/g,'').length > 11){
                console.log("Campo menor do que 11 dígitos, use apenas números.")
                exe = true
            }else{
                exe = false
                return valor.replace(/[^0-9]/g,'')
            }
        }
        return ""
    }
    public receberTexto(mensagem: string): string {
        let prompt = promptSync();
        let exe = true
        while (exe) {
            let texto = prompt(mensagem)
            let resto = texto.slice(1,texto.length)
            if (texto == ""){
                console.log("Campo Obrigatório!");
                exe = true
            }else if(texto.length < 3){
                console.log("Campo maior que 3 dígitos!");
                exe = true
            }
            else{
                exe = false
                return texto[0].toUpperCase()+resto.toLowerCase()
            }
            
        }
                return "Como conseguiu nosso contato?"
    }

    public receberGenero(mensagem: string): string{
        let prompt = promptSync();
        let exe = true
        while (exe) {
            let texto = prompt(mensagem)
            if (texto == ""){
                console.log("Campo Obrigatório!");
                exe = true
            }else if(texto[0].toUpperCase() == 'M'){
                exe = false
                return 'Masculino'
            }else if(texto[0].toUpperCase() == 'F'){
                exe = false
                return 'Feminino'
            }
            else{
                console.log("Somente gênero Masculino e Feminino!");
                exe = true
            }
        }
        return "Como conseguiu nosso contato?"
    }
    
}