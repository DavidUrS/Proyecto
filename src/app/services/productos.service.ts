import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class ProductosService {

  productos: any[]=[];
  producto_cargado:boolean = true;

  constructor(public http:Http) {
    this.cargar_productos();
  }


  public cargar_productos(){
    this.producto_cargado = true;
      this.http.get("https://mundo-web.firebaseio.com/productos_idx.json")
      .subscribe(res=>{
        console.log(res.json());
        this.producto_cargado = false;
      });

  }

}
