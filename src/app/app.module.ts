import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NotificationComponent } from './notification-center/notification/notification.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { GlobalInterceptor } from './global.interceptor';
import { MatSnackBarModule}  from '@angular/material/snack-bar'
import { CostomerrorhandlerService } from './costomerrorhandler.service';
import { NzSelectModule } from 'ng-zorro-antd/select'
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzInputModule,
    NzGridModule,
    NzCardModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    NzListModule,
    NzTableModule,
    FormsModule,
    NzCheckboxModule  ,
    NzFormModule ,
    MatSnackBarModule,
    ReactiveFormsModule,
    NzSelectModule

  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    {provide : HTTP_INTERCEPTORS , useClass : GlobalInterceptor , multi:true},
    {provide : ErrorHandler , useClass : CostomerrorhandlerService}
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
