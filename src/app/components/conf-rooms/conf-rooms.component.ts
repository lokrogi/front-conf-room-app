import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConferenceRoom } from 'src/app/models/conf-room';
import { DateForBooking } from 'src/app/models/dateForBooking';
import { ConfRoomService } from 'src/app/services/conf-room.service';

@Component({
  selector: 'app-conf-rooms',
  templateUrl: './conf-rooms.component.html',
  styleUrls: ['./conf-rooms.component.css']
})
export class ConfRoomsComponent implements OnInit {

  conferenceRooms : ConferenceRoom[] = [];

  roomNameToDelete : string | null = null;
  roomIdToDelete : number | null = null;

  
  startDate: string | null = null;
  endDate: string | null = null;
  startDateToDisplay: string | null = null;
  endDateToDisplay: string | null = null;

  

  constructor(private confRoomService: ConfRoomService) { }

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
    this.confRoomService.getAllRooms().subscribe(
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

  public openDeleteModal(id : number, name: string) {
    this.roomNameToDelete = name;
    this.roomIdToDelete = id;

    let delModal = document.getElementById('delete-window');

    if(delModal != null) {
      delModal.style.display = 'block';
    }

  }

  public closeDeleteModal() {
    this.roomNameToDelete = null;
    this.roomIdToDelete = null;

    let delModal = document.getElementById('delete-window');

    if (delModal != null) {
        delModal.style.display = 'none';
    }
  }

  public deleteRoom() {
    // TODO
    console.log(`Deleting room with id ${this.roomIdToDelete}`)

    this.closeDeleteModal();
  }

  public openDateForm() {
    // TODO
    let dateForm = document.getElementById('date-div');

    if (dateForm != null) {
      dateForm.style.display = 'block';
    }
  }

  public closeDateForm() {
    let dateForm = document.getElementById('date-div');

    if (dateForm != null) {
      dateForm.style.display = 'none';
    }
  }

  public getRoomsForDate(form : NgForm) {
    let dateForBooking : DateForBooking = form.value as DateForBooking;

    this.startDate = dateForBooking.date + '-' + dateForBooking.startTime.split(':')[0] + '-' + dateForBooking.startTime.split(':')[1];
    this.endDate = dateForBooking.date + '-' + dateForBooking.endTime.split(':')[0] + '-' + dateForBooking.endTime.split(':')[1];
    this.startDateToDisplay = dateForBooking.date + ' ' + dateForBooking.startTime;
    this.endDateToDisplay = dateForBooking.date + ' ' + dateForBooking.endTime;


    this.getAllRooms();
    this.closeDateForm();

    //TODO
    console.log(`start: ${this.startDate}, end: ${this.endDate}`);
  }


}
