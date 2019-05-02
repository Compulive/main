import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {CalendarModule, CalendarDateFormatter} from 'angular-calendar';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DragulaModule} from 'ng2-dragula/ng2-dragula';
import {QuillModule} from 'ngx-quill';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {AppsRoutes} from './apps.routing';
import {ChatComponent} from './chat/chat.component';
import {TicketlistComponent} from './categoria1/ticketlist.component';
import {TicketdetailsComponent} from './ticketdetails/ticketdetails.component';
import {TaskboardComponent} from './taskboard/taskboard.component';
import {FullcalendarComponent} from './fullcalendar/fullcalendar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {Categoria2ContainerComponent} from './categoria2-container/categoria2-container.component';
import {Categoria2ListComponent} from './categoria2-container/components/categoria2-list/categoria2-list.component';
import {Categoria2FormComponent} from './categoria2-container/components/categoria2-form/categoria2-form.component';
import {Categoria2EditComponent} from './categoria2-container/components/categoria2-edit/categoria2-edit.component';
import {AlmacenContainerComponent} from './almacen-container/almacen-container.component';
import {AlmacenListComponent} from './almacen-container/components/almacen-list/almacen-list.component';
import {AlmacenFormComponent} from './almacen-container/components/almacen-form/almacen-form.component';
import {AlmacenEditComponent} from './almacen-container/components/almacen-edit/almacen-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    QuillModule,
    DragulaModule,
    RouterModule.forChild(AppsRoutes),
    PerfectScrollbarModule
  ],
  declarations: [
    ChatComponent,
    TicketlistComponent,
    TicketdetailsComponent,
    TaskboardComponent,
    FullcalendarComponent,
    Categoria2ContainerComponent,
    Categoria2ListComponent,
    Categoria2FormComponent,
    Categoria2EditComponent,
    AlmacenContainerComponent,
    AlmacenListComponent,
    AlmacenFormComponent,
    AlmacenEditComponent
  ], entryComponents: [Categoria2FormComponent, Categoria2EditComponent, AlmacenFormComponent, AlmacenEditComponent]
})
export class AppsModule {
}
