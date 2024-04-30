import { Component, OnInit } from '@angular/core';
import { UniversidadesService } from '../../servicios/universidades.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  universidades: any[] = [];

  constructor(public universidadesService: UniversidadesService) {
    this.universidadesService.getPersonas<any[]>().subscribe((data) => {
      this.universidades = data;
      console.log(data);
    });
  }

  ngOnInit() {
  }

  // onScrollDown() {
  //   console.log("Down");
  // }


}
