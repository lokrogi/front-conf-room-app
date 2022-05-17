import { Organization } from "./organization";

export class ConferenceRoom {
    id: number;
    name: string;
    level: number;
    available: boolean;
    sittingPlaces: number;
    standingPlaces: number;
    organizationDto: Organization;


  constructor(
    id: number, 
    name: string, 
    level: number, 
    available: boolean, 
    sittingPlaces: number, 
    standingPlaces: number, 
    organizationDto: Organization
) {
    this.id = id
    this.name = name
    this.level = level
    this.available = available
    this.sittingPlaces = sittingPlaces
    this.standingPlaces = standingPlaces
    this.organizationDto = organizationDto
  }

  public setId(id : number) {
    this.id = id;
  }
    
}