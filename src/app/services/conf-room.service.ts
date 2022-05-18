import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConferenceRoom } from '../models/conf-room';

@Injectable({
  providedIn: 'root'
})
export class ConfRoomService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:8080';

  public getAllRooms(): Observable<ConferenceRoom[]> {
    return this.http.get<ConferenceRoom[]>(`${this.baseUrl}/api/conferenceroom/all`);
  }

  public addRoom(orgId: number | undefined, conferenceRoom: ConferenceRoom): Observable<ConferenceRoom> {
    return this.http.post<ConferenceRoom>(`${this.baseUrl}/api/conferenceroom/add/${orgId}`, conferenceRoom);
  }

  public editRoom(id: number | undefined, conferenceRoom: ConferenceRoom): Observable<ConferenceRoom> {
    return this.http.put<ConferenceRoom>(`${this.baseUrl}/api/conferenceroom/update/${id}`, conferenceRoom);
  }

  public deleteRoom(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/api/conferenceroom/delete/${id}`);
  }
}
