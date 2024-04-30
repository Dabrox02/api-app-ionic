import { Component, Input, OnInit } from '@angular/core';
import { Universidad } from 'src/app/interfaces/universidad.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent  implements OnInit {

  @Input() universidad!:Universidad;

  constructor() { }

  ngOnInit() {}

}
