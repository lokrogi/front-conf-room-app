import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfRoomsComponent } from './components/conf-rooms/conf-rooms.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'rooms', component: ConfRoomsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
