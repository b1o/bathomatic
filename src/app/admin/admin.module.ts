import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AntModule } from '../ant/ant.module';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeviceItemComponent } from './components/device-item/device-item.component';
import { IconsProviderModule } from '../icons-provider.module';
import { EditDeviceModalComponent } from './components/edit-device-modal/edit-device-modal.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';

@NgModule({
  declarations: [AdminPageComponent, DeviceItemComponent, EditDeviceModalComponent, AuthPageComponent],
  imports: [
    CommonModule,
    AntModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    IconsProviderModule,
  ],
})
export class AdminModule {}
