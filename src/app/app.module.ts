import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableCrudComponent } from './pages/table-crud/table-crud.component';

import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
//import {CalendarModule} from 'primeng/calendar';
//import {SliderModule} from 'primeng/slider';
//import {MultiSelectModule} from 'primeng/multiselect';
//import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
//import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    AppComponent,
    TableCrudComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ToastModule,
    InputTextareaModule,
    InputTextModule,
    ToolbarModule,
    FileUploadModule,
    TableModule,
    RatingModule,
    DialogModule,
    DropdownModule,
    RadioButtonModule,
    ButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    HttpClientModule,
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
