import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserCreatePageRoutingModule } from './user-create-routing.module';

import { UserCreatePage } from './user-create.page';
import { ShareModule } from 'src/app/modulos/share/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserCreatePageRoutingModule,
    ShareModule
  ],
  declarations: [UserCreatePage]
})
export class UserCreatePageModule {}
