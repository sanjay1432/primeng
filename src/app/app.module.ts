import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PtableComponent } from './ptable/ptable.component';
import {TableModule} from 'primeng/table';
import { CarService } from './car.service';
@NgModule({
  declarations: [
    AppComponent,
    PtableComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, ButtonModule, HttpClientModule, TableModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
