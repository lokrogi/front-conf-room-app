import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConferenceRoom } from 'src/app/models/conf-room';
import { DateForBooking } from 'src/app/models/dateForBooking';
import { Organization } from 'src/app/models/organization';
import { ConfRoomService } from 'src/app/services/conf-room.service';
import { SharedService } from 'src/app/shared/shared.service';

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

  roomToEdit: ConferenceRoom | null = null;

  chosenOrganization: Organization | undefined;

  constructor(private confRoomService: ConfRoomService, private sharedService : SharedService, private router: Router) { }

  ngOnInit(): void {
    this.chosenOrganization = this.sharedService.getOrganization();
    this.redirectIfOrganizationUndefined();
    this.init();
  }

  public redirectIfOrganizationUndefined() {
    if(!this.chosenOrganization) {
      this.router.navigate([''])
    }
    
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

  public openEditForm(room : ConferenceRoom) {
    this.roomToEdit = room;

    let editForm = document.getElementById('edit-form')

    console.log(room.name)

    if (editForm != null) {
      editForm.style.display = 'block';
    }
  }

  public closeEditForm() {
    this.roomToEdit = null;

    let editForm = document.getElementById('edit-form')

    if (editForm != null) {
      editForm.style.display = 'none';
    }
  }

  public editRoom(id: number | undefined, form : NgForm) {
    let room = form.value as ConferenceRoom;

    //TODO
    
    console.log(room)
  }


}
