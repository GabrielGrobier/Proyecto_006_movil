import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { FirebaseLoginService } from 'src/app/servicios/firebase-login.service';
// se importan librerias para utilizar la camara 
import { Camera, CameraResultType,CameraSource } from '@capacitor/camera';
import {defineCustomElements} from '@ionic/pwa-elements/loader';
defineCustomElements(window);

// se importan librerias para utilizar la ubicacion del dispositivo 
import { Geolocation } from '@capacitor/geolocation';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
// se contruye funcion que permite abrir la camara del dispositivo
// dentro de image van los parametros de la camara e imagen a capturar 

    async tomarFoto(){
      const image = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100
      });
      console.log(image.webPath)
    }


  nombre:string =""
  usuario :string =""
  password :string =""

  constructor(public mensaje:ToastController, private route:Router,public alerta:AlertController, private storage : Storage,private loginFirebase:FirebaseLoginService) {
    this.obtenerUbicacion();
   }

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
  // Funcion que permite obtener la ubicacion 
  async obtenerUbicacion(){
    const coordenadas = await Geolocation.getCurrentPosition();
    // Se muestra latitud y longitud a traves de  la consola 
    console.log('Latitud ', coordenadas.coords.latitude);
    console.log('Longitud', coordenadas.coords.longitude);

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
