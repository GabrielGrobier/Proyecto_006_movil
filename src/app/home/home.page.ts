import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre : String = "";

  constructor(private storage : Storage) {}

  async ngOnInit(){
    const storage = await this.storage.create();
    this.nombre = await this.storage.get("nombre");
  }

}
