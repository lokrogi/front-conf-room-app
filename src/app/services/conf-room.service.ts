import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConferenceRoom } from '../models/conf-room';
import { Reservation } from '../models/reservation';
import { TimePeriodRequest } from '../models/time-peroid-request';

@Injectable({
  providedIn: 'root'
})
export class ConfRoomService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:8080';

  public getAllRooms(orgId: number | undefined): Observable<ConferenceRoom[]> {
    return this.http.get<ConferenceRoom[]>(`${this.baseUrl}/api/conferenceroom/all/${orgId}`);
  }

  public addRoom(orgId: number | undefined, conferenceRoom: ConferenceRoom): Observable<ConferenceRoom> {
    return this.http.post<ConferenceRoom>(`${this.baseUrl}/api/conferenceroom/add/${orgId}`, conferenceRoom);
  }

  public editRoom(id: number | undefined, conferenceRoom: ConferenceRoom): Observable<ConferenceRoom> {
    return this.http.put<ConferenceRoom>(`${this.baseUrl}/api/conferenceroom/${id}`, conferenceRoom);
  }

  public deleteRoom(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/api/conferenceroom/${id}`);
  }

  public getRoomsForTimePeriod(orgId : number | undefined, timePeriod: TimePeriodRequest): Observable<ConferenceRoom[]> {
    return this.http.post<ConferenceRoom[]>(`${this.baseUrl}/api/reservation/period/${orgId}`, timePeriod);
  }

  public bookRoom(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.baseUrl}/api/reservation/add`, reservation);
  }
}
