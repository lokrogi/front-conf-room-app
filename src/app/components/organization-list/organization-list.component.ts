import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Organization } from 'src/app/models/organization';
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

  constructor(private router : Router, private sharedService : SharedService) { }

  ngOnInit(): void {
    this.initOrganizations();
  }

  public initOrganizations() {
    this.organizations.push({id:1, name: 'organization 1'});
    this.organizations.push({id:2, name: 'organization 2'});
    this.organizations.push({id:3, name: 'organization 3'});
    this.organizations.push({id:4, name: 'organization 4'});
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
    let result = {id : this.organizationToEdit?.id, name : form.value.name} 

    //TODO
    console.log(result);
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
    //TODO
    
    console.log("Delete org with id " + this.organizationToDelete?.id);
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
    //TODO
    
    console.log(form.value)
    this.closeAddOrganizationModal();
  }


}
