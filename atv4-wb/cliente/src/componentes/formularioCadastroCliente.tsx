import React, { Component } from "react";
import axios from "axios";
import { FormCorrector } from "./formCorrector";

type props = {
    tema: string
}

export default class FormularioCadastroCliente extends Component<props> {
    state = {
        nome: '',
        sobrenome: '',
        email: '',
        ddd: '',
        telefone: '',
        estado: '',
        cidade: '',
        bairro: '',
        rua: '',
        numero: '',
        codigoPostal: '',
        informacoesAdicionais: '',

        nomeValid: false,
        sobrenomeValid: false,
        emailValid: false,
        dddValid: false,
        telefoneValid: false,
        estadoValid: false,
        cidadeValid: false,
        bairroValid: false,
        ruaValid: false,
        numeroValid: false,
        codigoPostalValid: false,
        informacoesAdicionaisValid: false,
        formValid: false,

        formCorrector: {
            nome: '',
            sobrenome: '',
            email: '',
            ddd: '',
            telefone: '',
            estado: '',
            cidade: '',
            bairro: '',
            rua: '',
            numero: '',
            codigoPostal: '',
            informacoesAdicionais: ''
        }
    }

    validateField(fieldName: string, value: string) {
        let fieldValidationErrors = this.state.formCorrector;
        let nomeValid = this.state.nomeValid;
        let sobrenomeValid = this.state.sobrenomeValid;
        let emailValid = this.state.emailValid;
        let dddValid = this.state.dddValid;
        let telefoneValid = this.state.telefoneValid;
        let estadoValid = this.state.estadoValid;
        let cidadeValid = this.state.cidadeValid;
        let bairroValid = this.state.bairroValid;
        let ruaValid = this.state.ruaValid;
        let numeroValid = this.state.numeroValid;
        let codigoPostalValid = this.state.codigoPostalValid;
        let informacoesAdicionaisValid = this.state.informacoesAdicionaisValid;
      
        switch(fieldName) {
            case 'nome':
                nomeValid = value.length > 0;
                fieldValidationErrors.nome = nomeValid ? '' : ' Inválido';
                break;
            case 'sobrenome':
                sobrenomeValid = value.length > 0;
                fieldValidationErrors.sobrenome = sobrenomeValid ? '' : ' Inválido';
                break;
            case 'email':
                emailValid = value.match(/\S+@\S+\.\S+/i) !== null;
                fieldValidationErrors.email = emailValid ? '' : ' Inválido';
                break;
            case 'ddd':
                dddValid = value.match(/^[0-9]+$/) !== null;
                fieldValidationErrors.ddd = dddValid ? '' : ' Inválido';
                break;
            case 'telefone':
                telefoneValid = value.match(/^[0-9]+$/) !== null;
                fieldValidationErrors.telefone = telefoneValid ? '' : ' Inválido';
                break;
            case 'estado':
                estadoValid = value.length > 0;
                fieldValidationErrors.estado = estadoValid ? '' : ' Inválido';
                break;
            case 'cidade':
                cidadeValid = value.length > 0;
                fieldValidationErrors.cidade = cidadeValid ? '' : ' Inválido';
                break;
            case 'bairro':
                bairroValid = value.length > 0;
                fieldValidationErrors.bairro = bairroValid ? '' : ' Inválido';
                break;
            case 'rua':
                ruaValid = value.length > 0;
                fieldValidationErrors.rua = ruaValid ? '' : ' Inválido';
                break;
            case 'numero':
                numeroValid = value.match(/^[0-9]+$/) !== null;
                fieldValidationErrors.numero = numeroValid ? '' : ' Inválido';
                break;
            case 'codigoPostal':
                codigoPostalValid = value.match(/^[0-9]+$/) !== null;
                fieldValidationErrors.codigoPostal = codigoPostalValid ? '' : ' Inválido';
                break;
            case 'informacoesAdicionais':
                informacoesAdicionaisValid = value.length > 0;
                fieldValidationErrors.informacoesAdicionais = informacoesAdicionaisValid ? '' : ' Inválido';
                break;
            default:
                break;
        }

        this.setState({ 
            formCorrector: fieldValidationErrors,
            nomeValid,
            sobrenomeValid,
            emailValid,
            dddValid,
            telefoneValid,
            estadoValid,
            cidadeValid,
            bairroValid,
            ruaValid,
            numeroValid,
            codigoPostalValid,
            informacoesAdicionaisValid
        }, this.validarForm);
    }
      
    validarForm() {
        const {
            nomeValid,
            sobrenomeValid,
            emailValid,
            dddValid,
            telefoneValid,
            estadoValid,
            cidadeValid,
            bairroValid,
            ruaValid,
            numeroValid,
            codigoPostalValid,
            informacoesAdicionaisValid
        } = this.state;
        
        this.setState({ 
            formValid: nomeValid &&
                sobrenomeValid &&
                emailValid &&
                dddValid &&
                telefoneValid &&
                estadoValid &&
                cidadeValid &&
                bairroValid &&
                ruaValid &&
                numeroValid &&
                codigoPostalValid &&
                informacoesAdicionaisValid
        }); 
    }

    changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState({ [name]: value } as any, () => {
            this.validateField(name, value);
        });
    }
    

    submitHandler = () => {
        const info = {
            nome: this.state.nome,
            sobreNome: this.state.sobrenome,
            email: this.state.email,
            endereco: {
                cidade: this.state.cidade,
                bairro: this.state.bairro,
                rua: this.state.rua,
                numero: this.state.numero,
                estado: this.state.estado,
                codigoPostal: this.state.codigoPostal,
                informacoesAdicionais: this.state.informacoesAdicionais
            },
            telefones: [{
                ddd: this.state.ddd,
                numero: this.state.numero
            }]
       }
    
        axios.post("http://localhost:32832/cliente/cadastrar", info)
            .then(() => {
                const novoCliente = { ...info, id: Date.now() }
                this.setState((prevState: any) => ({
                    clientes: [...prevState.clientes, novoCliente],
                    nome: '',
                    sobrenome: '',
                    email: '',
                    ddd: '',
                    telefone: '',
                    cidade: '',
                    bairro: '',
                    rua: '',
                    numero: '',
                    codigoPostal: '',
                    estado: '',
                    informacoesAdicionais: '',
                    formValid: false
                }));
            })
            .catch(error => {
                console.error('Erro ao cadastrar cliente:', error)
            });
    }
    
    
    render() {
        const estiloBotao = `btn waves-effect waves-light purple lighten-1 ${this.props.tema}`;
        
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nome" type="text" name="nome" className="validate" value={this.state.nome} onChange={this.changeHandler}/>
                            <label htmlFor="nome">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="sobrenome" type="text" name="sobrenome" className="validate" value = {this.state.sobrenome} onChange={this.changeHandler}/>
                            <label htmlFor="sobrenome">Sobrenome</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="telefone" type="text" name="email" className="validate" value = {this.state.email} onChange={this.changeHandler}/>
                            <label htmlFor="email">E-mail</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="telefone" type="number" name="ddd" className="validate" value = {this.state.ddd} onChange={this.changeHandler}/>
                            <label htmlFor="ddd">DDD</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="estado" type="number" name="telefone" className="validate" value = {this.state.telefone} onChange={this.changeHandler}/>
                            <label htmlFor="telefone">Telefone</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="estado" type="text" name="estado" className="validate" value = {this.state.estado} onChange={this.changeHandler}/>
                            <label htmlFor="estado">Estado</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="cidade" type="text" name="cidade" className="validate" value = {this.state.cidade} onChange={this.changeHandler}/>
                            <label htmlFor="cidade">Cidade</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="bairro" type="text" name="bairro" className="validate" value = {this.state.bairro } onChange={this.changeHandler}/>
                            <label htmlFor="bairro">Bairro</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="rua" type="text" name="rua" className="validate" value = {this.state.rua} onChange={this.changeHandler}/>
                            <label htmlFor="rua">Rua</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="numero" type="number" name="numero" className="validate" value = {this.state.numero} onChange={this.changeHandler}/>
                            <label htmlFor="numero">Número</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="cep" type="number" name="codigoPostal" className="validate" value = {this.state.codigoPostal} onChange={this.changeHandler}/>
                            <label htmlFor="cep">CEP</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="addinfo" type="text" name="informacoesAdicionais" className="validate" value = {this.state.informacoesAdicionais} onChange={this.changeHandler}/>
                            <label htmlFor="addinfo">Informações Adicionais</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} onClick={this.submitHandler} type="submit" name="action" disabled = {!this.state.formValid}>Cadastrar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>

                <FormCorrector formCorrector = {this.state.formCorrector} />
            </div>
        )
    }
}
