import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms'
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatSelectModule} from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component'
import {MatTableModule} from '@angular/material/table';
import { UserListComponent } from './user-list/user-list.component';


import { MenuService } from './_services/menu/menu.service';
import { ReservationService } from './_services/reservation/reservation.service';
import { UserService } from './_services/user/user.service';



@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    MenuComponent, 
    ReservationComponent, 
    LoginComponent, 
    ReservationListComponent, 
    UserListComponent,
  ],
  
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, 
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,

  ],
  providers: [MenuService, ReservationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
