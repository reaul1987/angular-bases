import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.components';
import { DbzListComponent } from './components/list/list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AddDbzComponent } from './components/add/add.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    DbzListComponent,
    AddDbzComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ]
})
export class DbzModule { }
