import { Component, OnInit } from '@angular/core';
import { ConfRoomsComponent } from './components/conf-rooms/conf-rooms.component';
import { ConfRoomService } from './services/conf-room.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    
  }
  
  public init(): void {

  }

  public openAddForm(): void {
    let confRoomComponent = new ConfRoomsComponent(null);

    confRoomComponent.openAddForm();
  }
}
