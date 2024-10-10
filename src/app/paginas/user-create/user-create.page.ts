import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseLoginService } from 'src/app/servicios/firebase-login.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.page.html',
  styleUrls: ['./user-create.page.scss'],
})
export class UserCreatePage implements OnInit {
  nombre:string =""
  usuario :string =""
  password :string =""


  constructor(private access:FirebaseLoginService, private router:Router) { }

  ngOnInit() {
  }
  async crear_usuario(){
    await this.access.create_user(this.usuario,this.password,this.nombre)

  }

}
