import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../../../../apps/app1/src/app/app-routing/app-routing.module';

@NgModule({
  imports: [CommonModule, AppRoutingModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class Lib1Module {}
