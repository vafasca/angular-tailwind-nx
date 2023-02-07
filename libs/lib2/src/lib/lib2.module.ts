import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { Lib3Module } from '@angular-tailwind-nx/lib3';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [CommonModule, Lib3Module, MatCardModule],
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class Lib2Module {}
