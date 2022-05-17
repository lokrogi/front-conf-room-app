import { Component, OnInit } from '@angular/core';
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
}
