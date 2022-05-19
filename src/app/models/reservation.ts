import { ConferenceRoom } from "./conf-room";

export interface Reservation {
    starting: string;
    ending: string;
    conferenceRoomDto: ConferenceRoom;
}