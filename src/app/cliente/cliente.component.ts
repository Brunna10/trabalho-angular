import { Component, OnInit, Input } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../../cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  newCliente : Cliente;

  clientes : Cliente[];
  
  showMessageError : boolean;

  constructor(private clienteService : ClienteService) { }

  ngOnInit() {
    this.newCliente = new Cliente();
    this.showMessageError = false;
    this.clientes = this.clienteService.getClientes();
  }

  loadClientes(){
    this.clientes = JSON.parse(localStorage.getItem('clientes' ));
  }

  saveCliente(){
    if(!this.newCliente.nome || this.newCliente.nome.trim() == '' || !this.newCliente.telefone){
      this.showMessageError= true;
    } else {
      this.showMessageError = false;
      if (!this.newCliente.id){
        this.newCliente.id = (new Date().getTime());
        this.clienteService.addCliente(this.newCliente);
      } else {
        this.clienteService.updateCliente(this.newCliente);
      }
    }

    this.showMessageError = false;
    this.newCliente = new Cliente();
  }

  selectCliente(cliente : Cliente){
    this.newCliente = cliente;
  }

  deleteCliente(cliente : Cliente) {
    this.clienteService.removeCliente(cliente);
  }

}
