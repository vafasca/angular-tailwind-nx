import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//
import { Lib1Module } from '@angular-tailwind-nx/lib1';
//adding new lib2 import
import { Lib2Module } from '@angular-tailwind-nx/lib2';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, Lib1Module, Lib2Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
