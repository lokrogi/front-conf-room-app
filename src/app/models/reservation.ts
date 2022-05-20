import { ConferenceRoom } from "./conf-room";

export class Reservation {
    id: number;
    starting: string;
    ending: string;
    conferenceRoomDto: ConferenceRoom;

  constructor(
    id: number,
    starting: string,
    ending: string,
    conferenceRoomDto: ConferenceRoom
    
) {
    this.id = id
    this.starting = starting
    this.ending = ending
    this.conferenceRoomDto = conferenceRoomDto

  }

  public setId(id : number) {
    this.id = id;
  }
}
