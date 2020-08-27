import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { AntModule } from './ant/ant.module';
import { RoomCardComponent } from './components/room-card/room-card.component';
import { ClockComponent } from './components/clock/clock.component';
import { RoomsFilterComponent } from './components/rooms-filter/rooms-filter.component';
import { FloorFilterComponent } from './components/floor-filter/floor-filter.component';
import { ActivityFilterComponent } from './components/activity-filter/activity-filter.component';
import { SystemsFilterComponent } from './components/systems-filter/systems-filter.component';
import { DemoPageComponent } from './pages/demo-page/demo-page.component';
import { RoomsPageComponent } from './pages/rooms-page/rooms-page.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { CreateRoomModalComponent } from './components/create-room-modal/create-room-modal.component';
import { ChartModule } from './chart/chart.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    RoomCardComponent,
    ClockComponent,
    RoomsFilterComponent,
    FloorFilterComponent,
    ActivityFilterComponent,
    SystemsFilterComponent,
    DemoPageComponent,
    RoomsPageComponent,
    CreateRoomModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    ChartModule,
    NgxChartsModule,
    IconsProviderModule,
    AntModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
