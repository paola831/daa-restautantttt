import { Injectable } from '@angular/core';
import { Menu } from 'src/app/_models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
private menuList: Menu[] = [
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

  constructor() { }

  getMenuList(): Menu[] {
    return this.menuList;
  }
}
