import { Routes } from '@angular/router';

import { ChatComponent } from './chat/chat.component';
import { TicketlistComponent } from './categoria1/ticketlist.component';
import { TicketdetailsComponent } from './ticketdetails/ticketdetails.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import {Categoria2ContainerComponent} from './categoria2-container/categoria2-container.component';

export const AppsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'chat',
        component: ChatComponent,
        data: {
          title: 'Chat App',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Chat App' }
          ]
        }
      },
      {
        path: 'categoria2',
        component: Categoria2ContainerComponent,
        data: {
          title: 'Categoría 2',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Categoría 2' }
          ]
        }
      },
      {
        path: 'categoria1',
        component: TicketlistComponent,
        data: {
          title: 'categoria 1',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'categoria 1' }
          ]
        }
      },

      {
        path: 'ticketdetails',
        component: TicketdetailsComponent,
        data: {
          title: 'Ticket Details',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Ticket Details' }
          ]
        }
      },
      {
        path: 'taskboard',
        component: TaskboardComponent,
        data: {
          title: 'Taskboard',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Taskboard' }
          ]
        }
      },
      {
        path: 'fullcalendar',
        component: FullcalendarComponent,
        data: {
          title: 'Full-Calendar',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Full-Calendar' }
          ]
        }
      }
    ]
  }
];
