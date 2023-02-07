import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from '../components/angular/angular.component';
import { DemonxComponent } from '../components/demonx/demonx.component';
import { HomeComponent } from '../components/home/home.component';
import { TailwindComponent } from '../components/tailwind/tailwind.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tailwind', component: TailwindComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'demonx', component: DemonxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
