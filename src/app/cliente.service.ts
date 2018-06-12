import { Injectable } from '@angular/core';
import { Cliente } from '../cliente';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ClienteService {

  clientes : Cliente[] = [];

  constructor() {
    this.clientes = [];
   }

  addCliente(cliente : Cliente): void{
    this.clientes.push(cliente);
    localStorage.setItem("clientes",JSON.stringify(this.clientes) );
  }

  getClientes() :  Cliente[] {
    if (localStorage.getItem('clientes') === null) {
      this.clientes = [];
    } else {
      this.clientes = JSON.parse(localStorage.getItem('clientes'));
    }
    return this.clientes;
  }

  updateCliente(cliente : Cliente){
    let existCliente = this.clientes.find(cli => cli.id == cliente.id);
    existCliente.nome = cliente.nome;
    existCliente.telefone = cliente.telefone;
  }

  removeCliente(cliente : Cliente) {
    let id = this.clientes.indexOf(cliente);
    this.clientes.splice(id, 1);
  }

  setLocalStorage(clientes : Cliente[]){
    localStorage.setItem('clientes', JSON.stringify({clientes : clientes}));
  }

}
