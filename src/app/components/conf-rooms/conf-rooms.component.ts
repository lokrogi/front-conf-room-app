import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConferenceRoom } from 'src/app/models/conf-room';
import { ConfRoomService } from 'src/app/services/conf-room.service';

@Component({
  selector: 'app-conf-rooms',
  templateUrl: './conf-rooms.component.html',
  styleUrls: ['./conf-rooms.component.css']
})
export class ConfRoomsComponent implements OnInit {

  conferenceRooms : ConferenceRoom[] = [];

  constructor(private confRoomService: ConfRoomService | null) { }

  ngOnInit(): void {
    this.init();
  }

  public init(): void {
    const addForm = document.getElementById('add-room-form');

    if(addForm != null) {
      addForm.style.display = 'none';
    }

    this.getAllRooms();
  }

  public getAllRooms(): void {
    this.confRoomService?.getAllRooms().subscribe(
      data => {
        this.conferenceRooms = data;
      }
    );
  }

  public closeAddForm(): void {
    const addForm = document.getElementById('add-room-form');

    if(addForm != null) {
      addForm.style.display = 'none';
    }
  }

  public openAddForm(): void {
    const addForm = document.getElementById('add-room-form');

    if(addForm != null) {
      addForm.style.display = 'block';
    }
  }

  public addRoom(form: NgForm) {
    //TODO
    console.log(JSON.stringify(form.value));
    this.closeAddForm();
  }
}
