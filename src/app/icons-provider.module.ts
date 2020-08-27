import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
  DeleteOutline,
  EditOutline,
  SearchOutline
} from '@ant-design/icons-angular/icons';

const icons = [
  EditOutline,
  SearchOutline,
  DeleteOutline,
  MenuFoldOutline,
  MenuUnfoldOutline,
  DashboardOutline,
  FormOutline,
  { icon: '/assets/bath.svg', name: 'bath' },
  { icon: '/assets/shower.svg', name: 'shower' },
  { icon: '/assets/steam.svg', name: 'steam' },
  { icon: '/assets/bathomatic.svg', name: 'bathomatic' },
  { icon: '/assets/ishower.svg', name: 'ishower' },
  { icon: '/assets/steamomatic.svg', name: 'steamomatic' },
  { icon: '/assets/device-bath.svg', name: 'device-bath' },
];

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [{ provide: NZ_ICONS, useValue: icons }],
})
export class IconsProviderModule {}
