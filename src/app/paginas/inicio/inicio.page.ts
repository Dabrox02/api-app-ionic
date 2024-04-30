import { Component, OnInit } from '@angular/core';
import { UniversidadesService } from '../../servicios/universidades.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  universidades: any[] = [];

  constructor(public universidadesService: UniversidadesService) {
  }

  ngOnInit() {
    this.getUniversidades();
  }

  getUniversidades():void{
    this.universidadesService.getPersonas<any[]>().subscribe((data) => {
      console.log(data);
      this.universidades.push(...data);
    });
  }

  onIonInfinite(ev: Event) {
    if(this.universidadesService.offset > 100){
      (ev as InfiniteScrollCustomEvent).target.disabled = true;
    }else{
      console.log(this.universidadesService.offset);
      this.universidadesService.offset += 5;
      this.getUniversidades();
      setTimeout(() => {
        (ev as InfiniteScrollCustomEvent).target.complete();
      }, 500);
    }
  }
}
