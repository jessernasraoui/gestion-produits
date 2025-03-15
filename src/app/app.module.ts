import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductFormComponent } from './Pages/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ProductFormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
