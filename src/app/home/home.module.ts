import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { MatDialogModule } from '@angular/material/dialog';

import { HomePageRoutingModule } from './home-routing.module';
import { CreateComponent } from './create/create.component';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage,CreateComponent]
})
export class HomePageModule {}
