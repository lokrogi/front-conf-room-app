import { Injectable } from '@angular/core';
import { Organization } from '../models/organization';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  organization: Organization | undefined;

  constructor() { }

  setOrganization(organization: Organization) {
    this.organization = organization;
  }

  getOrganization() {
    return this.organization;
  }
}
