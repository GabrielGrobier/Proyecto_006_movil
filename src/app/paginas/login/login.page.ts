import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nombre:string =""
  usuario :string =""
  password :string =""

  constructor(public mensaje:ToastController) { }

  async mensajeExito() {
    const toast = await this.mensaje.create({
      message: 'Incio de session exitoso ',
      duration: 2000
    });
    toast.present();
  }

  ingresar(){
    if(this.usuario ==="" && this.password===""){
      console.log("No pueden estar los campos vacios ")
    }
    else{
      console.log("inicio exitoso ")
      this.mensajeExito()
    }
  }

  ngOnInit() {
  }

}
