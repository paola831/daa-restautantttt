import { Injectable } from '@angular/core';
import { Reservation } from 'src/app/_models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation [] = [
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

  constructor() { }

  getReservations(): Reservation[] {
    return this.reservations;
  }

  deleteReservatiion () {
    alert ('Boton de borrado activado');
  }

}
