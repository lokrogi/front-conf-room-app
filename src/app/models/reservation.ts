import { ConferenceRoom } from "./conf-room";

export interface Reservation {
    id: number | undefined;
    starting: string;
    ending: string;
    conferenceRoomDto: ConferenceRoom;
}

