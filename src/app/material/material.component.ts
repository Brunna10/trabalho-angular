import { Component, OnInit } from '@angular/core';
import { Material } from '../../material';
import { MaterialService } from '../material.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  newMaterial : Material;

  materiais : Material[];

  showMessageError : boolean;

  constructor(private materialService : MaterialService) { }

  ngOnInit() {
    this.newMaterial = new Material();
    this.showMessageError = false;
    this.materiais = this.materialService.getMaterial();
  }

  loadMateriais(){
    this.materiais = JSON.parse(localStorage.getItem('materiais' ));
  }

  saveMaterial(){
    if(!this.newMaterial.nome || this.newMaterial.nome.trim() == '' || !this.newMaterial.qtd){
      this.showMessageError = true;
    } else {
      this.showMessageError = false;
      if(!this.newMaterial.id){
        this.newMaterial.id = (new Date().getTime());
        this.materialService.addMaterial(this.newMaterial);
      } else {
        this.materialService.updateMaterial(this.newMaterial);
      }
    }

    this.showMessageError = false;
    this.newMaterial = new Material();
  }

  deleteMaterial(material : Material) {
    this.materialService.removeMaterial(material);
  }

  selectMaterial(material : Material){
    this.newMaterial = material;
  }

}
