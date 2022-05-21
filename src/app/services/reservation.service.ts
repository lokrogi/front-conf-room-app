import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from "../models/reservation";

@Injectable({
  providedIn: 'root'
})

export class ReservationService {
  
  reservationBaseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  public getAllReservationsForSpecificOrganization(organizationId: number | undefined) : Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.reservationBaseUrl}/reservation/all/${organizationId}`);
  }

  public deleteReservation(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.reservationBaseUrl}/reservation/${id}`);
  }
}
