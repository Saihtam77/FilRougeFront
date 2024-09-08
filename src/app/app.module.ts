import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { provideHttpClient } from '@angular/common/http';
import { NavigationModule } from './navigation/navigation.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    NavigationModule,
    BrowserAnimationsModule,
  
  ],
  providers: [
    provideHttpClient()

  ],
  bootstrap: [AppComponent]
})  
export class AppModule { }
