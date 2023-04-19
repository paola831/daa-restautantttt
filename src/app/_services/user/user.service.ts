import { Injectable } from '@angular/core';
import { User } from 'src/app/_models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    { username:'paola.villarreal', name: 'Paola Villarreal' },
    { username:'emiliano.falcon', name: 'Emiliano Falcon' },
 ];

  constructor() { }
  
  getUsers(): User[] {
    return this.users;
  }

  deleteUser() {
    alert('Boton de borrado')
  }

}
