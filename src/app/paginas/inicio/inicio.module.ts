import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { ComponentesModule } from "../../componentes/componentes.module";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
    declarations: [InicioPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InicioPageRoutingModule,
        ComponentesModule,
        InfiniteScrollModule
    ],
    exports: [InicioPage]
})
export class InicioPageModule {}
