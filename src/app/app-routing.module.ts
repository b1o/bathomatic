import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoPageComponent } from './pages/demo-page/demo-page.component';
import { RoomsPageComponent } from './pages/rooms-page/rooms-page.component';
import { RoomDeviceListPageComponent } from './pages/room-device-list-page/room-device-list-page.component';
import { RoomDevicePageComponent } from './pages/room-device-page/room-device-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/rooms' },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  { path: 'rooms', component: RoomsPageComponent },
  {
    path: 'rooms/:id',
    component: DemoPageComponent,
    children: [
      { path: '', redirectTo: 'devices', pathMatch: 'full' },
      { path: 'devices', component: RoomDeviceListPageComponent },
      { path: 'device', component: RoomDevicePageComponent },
    ],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
