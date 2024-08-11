import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class MainMenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
