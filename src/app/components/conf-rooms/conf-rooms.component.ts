import { Component, OnInit } from '@angular/core';
import { ConferenceRoom } from 'src/app/models/conf-room';
import { ConfRoomService } from 'src/app/services/conf-room.service';

@Component({
  selector: 'app-conf-rooms',
  templateUrl: './conf-rooms.component.html',
  styleUrls: ['./conf-rooms.component.css']
})
export class ConfRoomsComponent implements OnInit {

  conferenceRooms : ConferenceRoom[] = [];

  constructor(private confRoomService: ConfRoomService) { }

  ngOnInit(): void {
    this.getAllCars();
  }

  public getAllCars(): void {
    this.confRoomService.getAllRooms().subscribe(
      data => {
        this.conferenceRooms = data;
      }
    );
  }
}
