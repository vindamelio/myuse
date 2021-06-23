import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddaComponent } from './components/adda/adda.component';
import { AddbComponent } from './components/addb/addb.component';
import { AddcComponent } from './components/addc/addc.component';
import { AdddComponent } from './components/addd/addd.component';
import { AddeComponent } from './components/adde/adde.component';
import { ProvaComponent } from './components/prova/prova.component';
const routes: Routes = [
  {path:"", redirectTo: '/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},

  {path:'adda', component: AddaComponent},
  {path:'adda/:id', component: AddaComponent},
  {path:'addb', component: AddbComponent},
  {path:'addb/:id', component: AddbComponent},
  {path:'addc', component: AddcComponent},
  {path:'addc/:id', component: AddcComponent},
  {path:'addd', component: AdddComponent},
  {path:'addd/:id', component: AdddComponent},
  {path:'adde', component: AddeComponent},
  {path:'adde/:id', component: AddeComponent},

  {path:'prova', component: ProvaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
