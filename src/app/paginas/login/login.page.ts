import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { FirebaseLoginService } from 'src/app/servicios/firebase-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nombre:string =""
  usuario :string =""
  password :string =""

  constructor(public mensaje:ToastController, private route:Router,public alerta:AlertController, private storage : Storage,private loginFirebase:FirebaseLoginService) { }

  async mensajeExito() {
    const toast = await this.mensaje.create({
      message: 'Incio de session exitoso ',
      duration: 2000
    });
    toast.present();
  }
  async MensajeError() {
    const alert = await this.alerta.create({
      header: 'Error',
      subHeader: 'Error de inicio de seson ',
      message: 'El inicio de sesion fallo ',
      buttons: ['Aceptar']
    });
  
    await alert.present();
  }

  

  ingresar(){
    if(this.usuario ==="" && this.password===""){
      console.log("No pueden estar los campos vacios ")
      this.MensajeError()
    }
    else{
      this.loginFirebase.login(this.usuario,this.password).then(()=>{
        this.storage.set("nombre",this.nombre)
        this.storage.set("SessionID",true)
        console.log("inicio exitoso ")
        this.mensajeExito()
        this.route.navigate(["/home"])
      }).catch(()=>{
        this.MensajeError();
      })

    }
  }

  async ngOnInit() {
    const storage = await this.storage.create();
  }

}
