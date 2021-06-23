import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddeComponent } from './components/adde/adde.component';
import { ProvaComponent } from './components/prova/prova.component';
const routes: Routes = [
  {path:"", redirectTo: '/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'adde', component: AddeComponent},
  {path:'adde/:id', component: AddeComponent},

  {path:'prova', component: ProvaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
