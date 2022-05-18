import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Organization } from 'src/app/models/organization';
import { OrganizationService } from 'src/app/services/organization.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent implements OnInit {

  organizations : Organization[] = [];

  chosenOrganization : Organization | undefined;

  organizationToEdit : Organization | null = null;

  organizationToDelete : Organization | null = null;

  constructor(private router : Router, private sharedService : SharedService,
    private organizationService : OrganizationService) { }

  ngOnInit(): void {
    this.getAllOrganizations();
  }

  public getAllOrganizations() {
    this.organizationService.getAllOrganizations().subscribe(
      (response: Organization[]) => {
        this.organizations = response;
      },
      (error : HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  public assignChosenOrganization(organization : Organization) {
    this.chosenOrganization = organization;
    this.sharedService.setOrganization(organization);

    this.router.navigate(['/rooms']);
    console.log(this.chosenOrganization)

  }

  public openEditOrganizationModal(organization : Organization) {
    this.organizationToEdit = organization;

    let editModal = document.getElementById('edit-organization');

    if (editModal != null) {
      editModal.style.display = 'block';
    }
  }

  public closeEditOrganizationModal() {
    this.organizationToEdit = null;
    let editModal = document.getElementById('edit-organization');

    if (editModal != null) {
      editModal.style.display = 'none';
    }
  }

  public editOrganization(form : NgForm) {
    this.organizationService.editOrganization(this.organizationToEdit?.id, form.value).subscribe(
      (response: Organization) => {
        console.log(`Updated organization with id: ${this.organizationToEdit?.id}`);
        this.getAllOrganizations();
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    )
    this.closeEditOrganizationModal();
  }

  public openDeleteOrganizationModal(organization : Organization) {
    this.organizationToDelete = organization;

    let deleteModal = document.getElementById('delete-organization');

    if(deleteModal != null) {
      deleteModal.style.display = 'block';
    }
  }

  public closeDeleteOrganizationModal() {
    this.organizationToDelete = null;
    let deleteModal = document.getElementById('delete-organization');

    if(deleteModal != null) {
      deleteModal.style.display = 'none';
    }
  }

  public deleteOrganization() {
    this.organizationService.deleteOrganization(this.organizationToDelete?.id).subscribe(
      (response: void) => {
        console.log("Deleted organization with id " + this.organizationToDelete?.id);
        this.getAllOrganizations();
      },
      (error : HttpErrorResponse) => {
        console.log(error.message);
      }
    );
    this.closeDeleteOrganizationModal();
  }

  public openAddOrganizationModal() {
    let addModal = document.getElementById('add-organization');

    if(addModal != null) {
      addModal.style.display = 'block'
    }
  }

  public closeAddOrganizationModal() {
    let addModal = document.getElementById('add-organization');

    if(addModal != null) {
      addModal.style.display = 'none'
    }
  }

  public addOrganization(form : NgForm) {
    this.organizationService.addOrganization(form.value).subscribe(
      (response: Organization) => {
        console.log(`Added ${response.name}`);
        this.getAllOrganizations();
      },
      (error : HttpErrorResponse) => {
        console.log(error.message);
      }
    );
    this.closeAddOrganizationModal();
  }


}
