import { Component } from "react";
import axios from "axios";

type props = {
    tema: string
}

type Cliente = {
    id: number
    nome: string
    sobrenome: string
    email: string
    ddd: number
    telefone: number
    estado: string
    cidade: string
    bairro: string
    rua: string
    numero: number
    codigoPostal: number
    informacoesAdicionais: string
}

type State = {
    clientes: Cliente[]
    clienteEdit: Cliente | null
    editOpen: boolean
}

export default class ListaCliente extends Component<props, State> {
    state: State = {
        clientes: [],
        clienteEdit: null,
        editOpen: false
    };

    componentDidMount() {
        axios.get('http://localhost:32832/clientes')
            .then((res) => {
                const clientes = res.data;
                this.setState({ clientes });
            })
            .catch((error) => {
                console.error('Erro ao buscar clientes:', error)
            });
    }

    edit = (cliente: Cliente) => {
        this.setState({ editOpen: true, clienteEdit: cliente })
    }

    editClose = () => {
        this.setState({ editOpen: false, clienteEdit: null })
    }

    updateEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        this.setState(prevState => ({
            clienteEdit: {
                ...prevState.clienteEdit!,
                [name]: value
            }
        }));
    }
    saveEdit = () => {
        const { clienteEdit } = this.state;
        if (!clienteEdit) return;
        axios.put(`http://localhost:32832/cliente/editar/${clienteEdit.id}`, clienteEdit)
    }
    

    delete = (id: number) => {
        axios.delete(`http://localhost:32832/cliente/delete/${id}`)
            .then(() => {
                this.setState(prevState => ({
                    clientes: prevState.clientes.filter(cliente => cliente.id !== id),
                    clienteEdit: prevState.clienteEdit && prevState.clienteEdit.id === id ? null : prevState.clienteEdit
                }));
            })
            .catch((error) => {
                console.error('Erro ao excluir cliente:', error);
            });
    }

    render() {
        const edit = this.state.editOpen && this.state.clienteEdit && (
            <div className="edit">
                <div className="content">
                    <h4>Editar Cliente</h4>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="edit-nome" type="text" name="nome" className="validate" value={this.state.clienteEdit.nome} onChange={this.updateEdit} />
                            <label htmlFor="edit-nome">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="edit-sobrenome" type="text" name="sobrenome" className="validate" value={this.state.clienteEdit.sobrenome} onChange={this.updateEdit} />
                            <label htmlFor="edit-sobrenome">Sobrenome</label>
                        </div>
                        <div className="row">
                        <div className="input-field col s12">
                            <input id="telefone" type="text" name="email" className="validate" value = {this.state.clienteEdit.email} onChange={this.updateEdit}/>
                            <label htmlFor="email">E-mail</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="telefone" type="number" name="ddd" className="validate" value = {this.state.clienteEdit.ddd} onChange={this.updateEdit}/>
                            <label htmlFor="ddd">DDD</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="estado" type="number" name="telefone" className="validate" value = {this.state.clienteEdit.telefone} onChange={this.updateEdit}/>
                            <label htmlFor="telefone">Telefone</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="estado" type="text" name="estado" className="validate" value = {this.state.clienteEdit.estado} onChange={this.updateEdit}/>
                            <label htmlFor="estado">Estado</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="cidade" type="text" name="cidade" className="validate" value = {this.state.clienteEdit.cidade} onChange={this.updateEdit}/>
                            <label htmlFor="cidade">Cidade</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="bairro" type="text" name="bairro" className="validate" value = {this.state.clienteEdit.bairro } onChange={this.updateEdit}/>
                            <label htmlFor="bairro">Bairro</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="rua" type="text" name="rua" className="validate" value = {this.state.clienteEdit.rua} onChange={this.updateEdit}/>
                            <label htmlFor="rua">Rua</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="numero" type="number" name="numero" className="validate" value = {this.state.clienteEdit.numero} onChange={this.updateEdit}/>
                            <label htmlFor="numero">Número</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="cep" type="number" name="codigoPostal" className="validate" value = {this.state.clienteEdit.codigoPostal} onChange={this.updateEdit}/>
                            <label htmlFor="cep">CEP</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="addinfo" type="text" name="informacoesAdicionais" className="validate" value = {this.state.clienteEdit.informacoesAdicionais} onChange={this.updateEdit}/>
                            <label htmlFor="addinfo">Informações Adicionais</label>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn waves-effect waves-light purple lighten-1" onClick={this.editClose}>Fechar</button>
                    <button className="btn waves-effect waves-light purple lighten-1" onClick={this.saveEdit}>Salvar</button>
                </div>
            </div>
        );
        return (
            <table className="centered responsive-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Atualizar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.clientes.map((cliente: Cliente) => (
                        <tr key={cliente.id}>
                            <td>{cliente.nome}</td>
                            <td><button className="btn waves-effect waves-light purple lighten-1" onClick={() => this.edit(cliente)}>Editar<i className="fa-solid fa-pen"></i>Editar</button></td>
                            <td><button className="btn waves-effect waves-light purple lighten-1" value={cliente.id} onClick={() => this.delete(cliente.id)}><i className="fa-solid fa-xmark"></i>Excluir</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        
        );
    }
}
