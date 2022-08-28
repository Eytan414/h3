import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/home/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/home/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import {MatIconModule} from '@angular/material/icon';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    ProductsComponent,
    ProductCardComponent,
    ProductDetailsComponent,

  ],
  imports: [
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
