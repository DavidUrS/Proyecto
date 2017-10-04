import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class InformacionService {

  public info:any = {};
  public cargada:boolean = false;
  public cargada_sobre_nosotros:boolean = false;
  public equipo:any[] = [];

  constructor(public http:Http) {
  this.carga_info();
  this.carga_sobre_nosotros();
 }

  public carga_info(){
    this.http.get("assets/data/info.pagina.json")
                .subscribe(data =>{
                  this.info = data.json();
                  this.cargada = true;
                  // console.log(this.info);
                })
  }

  public carga_sobre_nosotros(){
    this.http.get("https://mundo-web.firebaseio.com/Equipo.json")
                .subscribe(data =>{
                  this.equipo = data.json();
                  this.cargada_sobre_nosotros = true;
                  // console.log(this.equipo);
                })
  }

}
