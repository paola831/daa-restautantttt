import { Component } from '@angular/core';
import { Menu } from '../_models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menuList: Menu[] = [
    {
      title: 'Poke Primavera',
      image: '../../assets/poke1.png',
      descripcion: 'Poke fresca con Camaron, elote, edamames, zanahoria, aguacate, piña y arroz', 
    },
    {
      title: 'Poke Verano',
      image: '../../assets/poke2.png',
      descripcion: 'Poke fresca con Atun, pepino, edamames, zanahoria, aguacate, piña ', 
    },
    {
      title: 'Make ur bowl',
      image: '../../assets/makepowl.png',
      descripcion: 'Poke fresca con Camaron, atun, pepino, queso philadelfia, elote, edamames, zanahoria, aguacate, piña y arroz', 
    }

]
}
