import { Component } from '@angular/core';
import { Reservation } from '../_models/reservation.model';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {
  reservations: Reservation [] = [
    { name:'Paola Villarreal', email:'paola.villareal@u-erre.mx', phone: '8617984872', people: 2, reservationDate: new Date ('2023-04-30T06:00:00.00Z',), reservationShedule: 7 },
    { name:'Paola Villarreal', email:'paola.villareal@u-erre.mx', phone: '8617984872', people: 2, reservationDate: new Date ('2023-04-30T06:00:00.00Z',), reservationShedule: 7 },
    { name:'Paola Villarreal', email:'paola.villareal@u-erre.mx', phone: '8617984872', people: 2, reservationDate: new Date ('2023-04-30T06:00:00.000Z'), reservationShedule: 7 },
    { name:'Paola Villarreal', email:'paola.villareal@u-erre.mx', phone: '8617984872', people: 2, reservationDate: new Date ('2023-04-30T06:00:00.000Z'), reservationShedule: 7 },
    { name:'Paola Villarreal', email:'paola.villareal@u-erre.mx', phone: '8617984872', people: 2, reservationDate: new Date ('2023-04-30T06:00:00.000Z'), reservationShedule: 7 },
    { name:'Paola Villarreal', email:'paola.villareal@u-erre.mx', phone: '8617984872', people: 2, reservationDate: new Date ('2023-04-30T06:00:00.000Z'), reservationShedule: 7 },
    { name:'Paola Villarreal', email:'paola.villareal@u-erre.mx', phone: '8617984872', people: 2, reservationDate: new Date ('2023-04-30T06:00:00.000Z'), reservationShedule: 7 },
    { name:'Paola Villarreal', email:'paola.villareal@u-erre.mx', phone: '8617984872', people: 2, reservationDate: new Date ('2023-04-30T06:00:00.000Z'), reservationShedule: 7 },
    { name:'Paola Villarreal', email:'paola.villareal@u-erre.mx', phone: '8617984872', people: 2, reservationDate: new Date ('2023-04-30T06:00:00.000Z'), reservationShedule: 7 },
    { name:'Paola Villarreal', email:'paola.villareal@u-erre.mx', phone: '8617984872', people: 2, reservationDate: new Date ('2023-04-30T06:00:00.000Z'), reservationShedule: 7 },
    { name:'Paola Villarreal', email:'paola.villareal@u-erre.mx', phone: '8617984872', people: 2, reservationDate: new Date ('2023-04-30T06:00:00.000Z'), reservationShedule: 7 },
  ];

  displayedColumns: string[] = [
    'reservationDate', 
    'reservationShedule',
    'people',
    'name',
    'email',
    'phone',
    'actions'
  ];

  editButtonClicked(){
    alert('Boton de edicion activado');
  }

  deleteButtonClicked(){
    alert('Boton de borrado activado');
  }

}
