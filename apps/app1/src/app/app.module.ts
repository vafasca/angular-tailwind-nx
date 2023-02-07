import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//
import { Lib1Module } from '@angular-tailwind-nx/lib1';
//adding new lib2 import
import { Lib2Module } from '@angular-tailwind-nx/lib2';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

//angular material
import { MatButtonModule } from '@angular/material/button';
import { AngularComponent } from './components/angular/angular.component';
import { TailwindComponent } from './components/tailwind/tailwind.component';
import { DemonxComponent } from './components/demonx/demonx.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    AngularComponent,
    TailwindComponent,
    DemonxComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    Lib1Module,
    Lib2Module,
    MatButtonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
