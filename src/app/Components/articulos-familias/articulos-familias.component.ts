import { Component, OnInit } from "@angular/core";
import { ArticuloFamilia } from "../../Models/articulo-familia";

import { ArticulosFamiliasService } from "../../Services/articulos-familias.service";
 
@Component({
  selector: "app-articulos-familias",
  templateUrl: "./articulos-familias.component.html",
  styleUrls: ["./articulos-familias.component.css"]
})
export class ArticulosFamiliasComponent implements OnInit {
  Titulo = "Articulos Familias";
  Items: ArticuloFamilia[] = [];
 
  constructor(
    private articulosFamiliasService: ArticulosFamiliasService
  ){}
 
  ngOnInit() {
    this.GetFamiliasArticulos();
  }
 
  GetFamiliasArticulos() {
    this.articulosFamiliasService.get()
    .subscribe((res:ArticuloFamilia[]) => {
      this.Items = res;
    });
  }
}
