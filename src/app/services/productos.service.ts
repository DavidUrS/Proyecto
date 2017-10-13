import { Injectable } from '@angular/core';
import {Http} from "@angular/http";



@Injectable()
export class ProductosService {

  productos: any[]=[];
  productos_filtrados: any[]=[];
  producto_cargado:boolean = true;

  constructor(public http:Http) {
    this.cargar_productos();
  }

  public buscar_producto(termino:string){
    console.log("Buscando Productos");
    console.log(this.productos.length);
    console.log(termino);

    if(this.productos.length==0){
      this.cargar_productos().then( ()=>{

        this.filtrar_productos(termino);

      });
    }else{
      this.filtrar_productos(termino);
    }
  }

  private filtrar_productos(termino:string){
    this.productos_filtrados = [];
    termino = termino.toLowerCase();
    this.productos.forEach(prod=>{
      if(prod.categoria.toLowerCase().indexOf(termino) >=0 || prod.titulo.toLowerCase().indexOf(termino) >=0){
        this.productos_filtrados.push(prod);
        console.log(prod);
      }
      // console.log(prod);
    });
  }


  public cargar_producto(cod:string){
      return this.http.get(`https://mundo-web.firebaseio.com/productos/${cod}.json`)
  }


  public cargar_productos(){

    this.producto_cargado = true;
    let promesa = new Promise ((resolve,reject)=>{
      this.http.get("https://mundo-web.firebaseio.com/productos_idx.json")
      .subscribe(res=>{

          this.producto_cargado = false;
          this.productos= res.json();
          // console.log(this.productos);
          resolve();
      });
    });
    return promesa;


  }

}
