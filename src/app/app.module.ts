import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FormsModule,
  NgSelectOption,
  ReactiveFormsModule,
} from '@angular/forms';

import { AppComponent } from './app.component';
import { UserClientService } from './infraestructure/userClientService';
import { UserService } from './business/UserService';
import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule,
  ],
  providers: [UserClientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
