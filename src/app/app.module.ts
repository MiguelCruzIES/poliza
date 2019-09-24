import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { AignarpolizaComponent } from './aignarpoliza/aignarpoliza.component';

const routes: Routes = [
  { path: 'aignarpoliza', component: AignarpolizaComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AignarpolizaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

