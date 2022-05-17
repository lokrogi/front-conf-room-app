import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfRoomsComponent } from './components/conf-rooms/conf-rooms.component';
import { OrganizationListComponent } from './components/organization-list/organization-list.component';

const routes: Routes = [
  { path: '', component: OrganizationListComponent },
  { path: 'rooms', component: ConfRoomsComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
