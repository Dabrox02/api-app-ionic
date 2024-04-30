import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentesModule } from './componentes/componentes.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InicioPageModule } from "./paginas/inicio/inicio.module";

@NgModule({
    declarations: [AppComponent],
    providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        ComponentesModule,
        HttpClientModule,
        InicioPageModule
    ]
})
export class AppModule {}
