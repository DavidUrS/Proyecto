import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  constructor() {

  }

  buscar_producto(termino:string){
    console.log(termino);
  }

}
