import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre:string = ""
  niveles:any[]=[
    {id:1,nivel:"Educacion Basica"},
    {id:2,nivel:"Educacion Media"},
    {id:3,nivel:"Educacion Superior"},
  ]

  constructor() {}

  mostrarNombre(){
    console.log(this.nombre)
  }
}
