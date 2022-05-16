import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConferenceRoom } from '../models/conf-room';

@Injectable({
  providedIn: 'root'
})
export class ConfRoomService {

  constructor(private http: HttpClient) { }

  public getAllRooms() : Observable<ConferenceRoom[]> {
    return this.http.get<ConferenceRoom[]>('http://localhost:8080/api/conferenceroom/all')
  }
}
