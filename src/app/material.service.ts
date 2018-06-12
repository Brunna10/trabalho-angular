import { Injectable } from '@angular/core';
import { Material } from '../material';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MaterialService {

  materiais : Material[] = [];

  constructor() { 
    this.materiais = []
  }

  addMaterial(material : Material){
    this.materiais.push(material);
    localStorage.setItem("materiais",JSON.stringify(this.materiais) );
  }

  getMaterial() : Material[]{
    if (localStorage.getItem('materiais') === null) {
      this.materiais = [];
    } else {
      this.materiais = JSON.parse(localStorage.getItem('materiais'));
    }
    return this.materiais;
  }

  updateMaterial(material : Material){
    let existMaterial = this.materiais.find(mat => mat.id == material.id);
    existMaterial.nome = material.nome;
    existMaterial.qtd = material.qtd;
    localStorage.setItem('materiais',JSON.stringify({materiais : existMaterial}))
  }

  removeMaterial(material: Material){
    let id = this.materiais.indexOf(material);
    this.materiais.splice(id,1);
    localStorage.setItem('materiais', JSON.stringify(this.materiais));
  }

  setLocalStorage(materiais: Material[]){
    localStorage.setItem('materiais',JSON.stringify({materiais : materiais}))
  }
}
