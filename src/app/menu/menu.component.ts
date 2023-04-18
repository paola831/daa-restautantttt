import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menuList = [
    {
      title: 'Poke Primavera',
      Image: '../../assets/poke1.png',
      descripcion: 'Poke fresca con Camaron, elote, edamames, zanahoria, aguacate, piña y arroz', 
    },
    {
      title: 'Poke Verano',
      Image: '../../assets/poke2.png',
      descripcion: 'Poke fresca con Atun, pepino, edamames, zanahoria, aguacate, piña ', 
    },
    {
      title: 'Make ur bowl',
      image: '../../assets/makepowl.png',
      descripcion: 'Poke fresca con Camaron, atun, pepino, queso philadelfia, elote, edamames, zanahoria, aguacate, piña y arroz', 
    }

]
}
