import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Organization } from '../models/organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http : HttpClient) { }

  baseUrl : string = 'http://localhost:8080'

  public getAllOrganizations() : Observable<Organization[]> {
    return this.http.get<Organization[]>(`${this.baseUrl}/api/organization/all`);
  }

  public addOrganization(organization: Organization): Observable<Organization> {
    return this.http.post<Organization>(`${this.baseUrl}/api/organization/`, organization);
  }

  public deleteOrganization(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/api/organization/${id}`);
  }

  public editOrganization(id: number | undefined, updatedOrganization: Organization): Observable<Organization> {
    return this.http.put<Organization>(`${this.baseUrl}/api/organization/${id}`, updatedOrganization);
  }
}
