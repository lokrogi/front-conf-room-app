import { getLocaleDateFormat } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConferenceRoom } from 'src/app/models/conf-room';
import { DateForBooking } from 'src/app/models/dateForBooking';
import { Organization } from 'src/app/models/organization';
import { Reservation } from 'src/app/models/reservation';
import { TimePeriodRequest } from 'src/app/models/time-peroid-request';
import { ConfRoomService } from 'src/app/services/conf-room.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-conf-rooms',
  templateUrl: './conf-rooms.component.html',
  styleUrls: ['./conf-rooms.component.css']
})
export class ConfRoomsComponent implements OnInit {
  conferenceRooms : ConferenceRoom[] = [];

  roomToDelete: ConferenceRoom | null = null;
  
  startDate: string | null = null;
  endDate: string | null = null;
  startDateToDisplay: string | null = null;
  endDateToDisplay: string | null = null;

  roomToEdit: ConferenceRoom | null = null;

  roomToBook: ConferenceRoom | null = null;

  chosenOrganization: Organization | undefined;

  constructor(private confRoomService: ConfRoomService, private sharedService : SharedService, private router: Router) { }

  ngOnInit(): void {
    this.chosenOrganization = this.sharedService.getOrganization();
    this.redirectIfOrganizationUndefined();
    this.getAllRooms();
  }

  public redirectIfOrganizationUndefined() {
    if(!this.chosenOrganization) {
      this.router.navigate([''])
    }
  }

  public getAllRooms(): void {
    this.confRoomService.getAllRooms(this.chosenOrganization?.id).subscribe(
      (response: ConferenceRoom[]) => {
        this.conferenceRooms = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
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
    this.confRoomService.addRoom(this.chosenOrganization?.id, form.value).subscribe(
      (response: ConferenceRoom) => {
        this.getAllRooms();
        console.log(`Added room with name ${response.name}`);
      },
      (error: HttpErrorResponse) => {
        this.showErrorMessage(error.error.details);
      }
    );
    this.closeAddForm();
  }

  public openDeleteModal(roomToDelete : ConferenceRoom) {
    this.roomToDelete = roomToDelete;

    let delModal = document.getElementById('delete-modal');

    if(delModal != null) {
      delModal.style.display = 'block';
    }

  }

  public closeDeleteModal() {
    this.roomToDelete = null;

    let delModal = document.getElementById('delete-modal');

    if (delModal != null) {
        delModal.style.display = 'none';
    }
  }

  public deleteRoom() {
    this.confRoomService.deleteRoom(this.roomToDelete?.id).subscribe(
      (response: void) => {
        this.getAllRooms();
        console.log(`Deleted room with id: ${this.roomToDelete?.id}`)
      },
      (error: HttpErrorResponse) => {
        this.showErrorMessage(error.error.details);
      }
    );
    this.closeDeleteModal();
  }

  public openDateForm() {
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

  public chooseDatePeriod(form : NgForm) {
    let dateForBooking : DateForBooking = form.value as DateForBooking;

    this.startDate = dateForBooking.date + 'T' + dateForBooking.startTime;
    this.endDate = dateForBooking.date + 'T' + dateForBooking.endTime;
    this.startDateToDisplay = dateForBooking.date + ' ' + dateForBooking.startTime;
    this.endDateToDisplay = dateForBooking.date + ' ' + dateForBooking.endTime;

    this.getRoomsForTimePeriod();
    
    this.closeDateForm();
  }

  public getRoomsForTimePeriod() {
    const timePeriod = {starting: this.startDate, ending: this.endDate} as TimePeriodRequest

    this.confRoomService.getRoomsForTimePeriod(this.chosenOrganization?.id, timePeriod).subscribe(
      (response: ConferenceRoom[]) => {
        this.conferenceRooms = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
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

  public editRoom(form : NgForm) {
    this.confRoomService.editRoom(this.roomToEdit?.id, form.value).subscribe(
      (response: ConferenceRoom) => {
        this.getAllRooms();
        console.log(`Updating room with id: ${response.id}`)
      },
      (error: HttpErrorResponse) => {
        this.showErrorMessage(error.error.details);
      }
    );
    this.closeEditForm();
  }

  public openBookingModal(room : ConferenceRoom) {
    this.roomToBook = room;

    let bookingModal = document.getElementById('booking-modal');

    if(bookingModal != null) {
      bookingModal.style.display = 'block';
    }
  }

  public closeBookingModal() {
    this.roomToBook = null;

    let bookingModal = document.getElementById('booking-modal');

    if(bookingModal != null) {
      bookingModal.style.display = 'none';
    }
  }

  public bookRoom() {
    const reservation = {starting: this.startDate, ending: this.endDate, conferenceRoomDto: this.roomToBook} as Reservation

    this.confRoomService.bookRoom(reservation).subscribe(
      (response: Reservation) => {
        this.getRoomsForTimePeriod();
        console.log(`Room ${reservation.conferenceRoomDto.name} was booked from ${reservation.starting} to ${reservation.ending}`);
      },
      (error: HttpErrorResponse) => {
        this.showErrorMessage(error.error.details);
      }
    );

    this.closeBookingModal();
  }

  public async showErrorMessage(message : string) {
    let errorMessage = document.getElementById('error-message');

    if(errorMessage != null) {
      errorMessage.style.display = 'block';
      errorMessage.textContent = message;

      await new Promise(resolve => setTimeout(resolve, 4000));

      errorMessage.style.display = 'none';
    }
  }

  public redirectToReservations() {
    this.router.navigate(['/reservations']);
  }

  public redirectToOrganizations() {
    this.router.navigate(['']);
  }
}