import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/models/reservation';
import { Organization } from 'src/app/models/organization';
import { ReservationService } from 'src/app/services/reservation.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  reservations : Reservation[] = [];

  reservationToDelete : Reservation | null = null;

  chosenOrganization: Organization | undefined;
  
  constructor(private router: Router, private sharedService: SharedService,
     private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.chosenOrganization = this.sharedService.getOrganization();
    this.redirectIfOrganizationUndefined();
    this.getAllReservationsForSpecificOrganization();
   }

   public redirectIfOrganizationUndefined() {
    if(!this.chosenOrganization) {
      this.router.navigate([''])
    }
  }

   public getAllReservationsForSpecificOrganization(): void {
   this.reservationService.getAllReservationsForSpecificOrganization(this.chosenOrganization?.id).subscribe(
      (response: Reservation[]) => {
        this.reservations = response;
      },
      (error : HttpErrorResponse) => {
        console.log(error.message);
      }
    );
   }

   public openDeleteReservationModal(reservation : Reservation) {
    this.reservationToDelete = reservation;

    let deleteModal = document.getElementById('delete-reservation');

    if(deleteModal != null) {
      deleteModal.style.display = 'block';
    }
  }

  public closeDeleteReservationModal() {
    this.reservationToDelete = null;
    let deleteModal = document.getElementById('delete-reservation');

    if(deleteModal != null) {
      deleteModal.style.display = 'none';
    }
  }

  public deleteReservation() {
    this.reservationService.deleteReservation(this.reservationToDelete?.id).subscribe(
      (response: void) => {
        console.log("Deleted reservation with id " + this.reservationToDelete?.id);
        this.getAllReservationsForSpecificOrganization();
      },
      (error : HttpErrorResponse) => {
        console.log(error.message);
      }
    );
    this.closeDeleteReservationModal();
  }

  public redirectToConfRooms() {
    this.router.navigate(['/rooms']);
  }

}

