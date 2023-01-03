import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { AddPlayerDataComponent } from './components/add-player-data/add-player-data.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzMessageModule } from 'ng-zorro-antd/message'
import { NzTimelineModule } from 'ng-zorro-antd/timeline'
@NgModule({
  declarations: [
    AddPlayerDataComponent
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    NzCardModule,
    NzTableModule,
    NzDividerModule,
    NzGridModule,
    NzButtonModule,
    HttpClientModule,
    NzMessageModule,
    NzTimelineModule
  ],
  providers:[{ provide: NZ_I18N, useValue: en_US }]
})
export class PlayerModule { }


