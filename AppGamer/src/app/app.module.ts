import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { DetalleComponent } from './detalle/detalle.component';
import { NewComponent } from './new/new.component';
import { RegistroComponent } from './registro/registro.component';
import { CabeceraComponent } from './commons/cabecera/cabecera.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostsComponent,
    DetalleComponent,
    NewComponent,
    RegistroComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
