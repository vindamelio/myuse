import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { NgxsModule } from "@ngxs/store";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";

import { environment } from "../environments/environment";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
//import { HeaderNavComponent } from "./shared/components/header-nav.component";
import { StatoModule } from "./modules/stato/stato.module";
import { UserProviderService } from './services/user-provider.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListaComponent } from './components/lista/lista.component';
import { ListbComponent } from './components/listb/listb.component';
import { ListcComponent } from './components/listc/listc.component';
import { ListdComponent } from './components/listd/listd.component';
import { ListeComponent } from './components/liste/liste.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { AddEditbComponent } from './components/add-editb/add-editb.component';
import { AddEditcComponent } from './components/add-editc/add-editc.component';
import { AddEditdComponent } from './components/add-editd/add-editd.component';
import { AddEditeComponent } from './components/add-edite/add-edite.component';
import { ErrorComponent } from './components/error/error.component';
import { ProvaComponent } from './components/prova/prova.component';
import { AddaComponent } from './components/adda/adda.component';
import { AddbComponent } from './components/addb/addb.component';
import { AddcComponent } from './components/addc/addc.component';
import { AdddComponent } from './components/addd/addd.component';
import { AddeComponent } from './components/adde/adde.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddEditComponent,
    ErrorComponent,
    ProvaComponent,
    AddEditbComponent,
    AddEditcComponent,
    AddEditdComponent,
    AddEditeComponent,
    ListaComponent,
    ListbComponent,
    ListcComponent,
    ListdComponent,
    ListeComponent,
    AddaComponent,
    AddbComponent,
    AddcComponent,
    AdddComponent,
    AddeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([StatoModule], {
      developmentMode: !environment.production
    }),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyBootstrapModule
  ],
  providers: [
    UserProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
