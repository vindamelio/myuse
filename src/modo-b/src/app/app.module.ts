import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule,  } from '@ngx-formly/core';
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

import { ListeComponent } from './components/liste/liste.component';

import { AddEditeComponent } from './components/add-edite/add-edite.component';
import { ErrorComponent } from './components/error/error.component';
import { ProvaComponent } from './components/prova/prova.component';

import { AddeComponent } from './components/adde/adde.component';
import { UserTypeComponent } from './types/user-type/user-type.component';
import { InputWrapperComponent } from './wrappers/input-wrapper/input-wrapper.component';
import { PanelWrapperComponent } from './wrappers/panel-wrapper/panel-wrapper.component';
import { InputTypeTextComponent } from './types/input-type-text/input-type-text.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProvaComponent,
    AddEditeComponent,
    ListeComponent,
    AddeComponent,
    UserTypeComponent,
    InputWrapperComponent,
    PanelWrapperComponent,
    InputTypeTextComponent
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
    FormlyModule.forRoot({ 
      extras: { lazyRender: true },
      types: [
        { 
          name: 'string', 
          extends: "input",
          defaultOptions: {
            templateOptions: {
              type: "string" 
            }
          }
        },
        { 
          name: 'number', 
          extends: "input" ,
          defaultOptions: {
            templateOptions: {
              type: "number" 
            }
          }
        },
        { name: 'user-type', component: UserTypeComponent },
        { name: 'input-type-text', component: InputTypeTextComponent }
      ],
      wrappers: [
        { name: 'input-wrapper', component: InputWrapperComponent },
        { name: 'panel-wrapper', component: PanelWrapperComponent }
      ]
    }),
    FormlyBootstrapModule
  ],
  providers: [
    UserProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
