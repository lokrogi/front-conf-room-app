import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConfRoomsComponent } from './components/conf-rooms/conf-rooms.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { OrganizationListComponent } from './components/organization-list/organization-list.component';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatMenuModule} from '@angular/material/menu'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider'; 



@NgModule({
  declarations: [
    AppComponent,
    ConfRoomsComponent,
    ReservationsComponent,
    OrganizationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
