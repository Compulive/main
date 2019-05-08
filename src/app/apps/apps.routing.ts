import {Routes} from '@angular/router';

import {ChatComponent} from './chat/chat.component';
import {TicketlistComponent} from './categoria1/ticketlist.component';
import {TicketdetailsComponent} from './ticketdetails/ticketdetails.component';
import {TaskboardComponent} from './taskboard/taskboard.component';
import {FullcalendarComponent} from './fullcalendar/fullcalendar.component';
import {Categoria2ContainerComponent} from './categoria2-container/categoria2-container.component';
import {AlmacenContainerComponent} from './almacen-container/almacen-container.component';
import {ArticuloContainerComponent} from './articulo-container/articulo-container.component';

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
            {title: 'Dashboard', url: '/dashboard'},
            {title: 'Chat App'}
          ]
        }
      },
      {
        path: 'categoria2',
        component: Categoria2ContainerComponent,
        data: {
          title: 'Categoría 2',
          urls: [
            {title: 'Dashboard', url: '/dashboard'},
            {title: 'Categoría 2'}
          ]
        }
      },
      {
        path: 'categoria1',
        component: TicketlistComponent,
        data: {
          title: 'categoria 1',
          urls: [
            {title: 'Dashboard', url: '/dashboard'},
            {title: 'categoria 1'}
          ]
        }
      },
      {
        path: 'articulo',
        component: ArticuloContainerComponent,
        data: {
          title: 'Articulo',
          urls: [
            {title: 'Dashboard', url: '/articulo'},
            {title: 'Articulo'}
          ]
        }
      },
      {
        path: 'almacen',
        component: AlmacenContainerComponent,
        data: {
          title: 'Almacen',
          urls: [
            {title: 'Dashboard', url: '/dashboard'},
            {title: 'Almacen'}
          ]
        }
      },

      {
        path: 'ticketdetails',
        component: TicketdetailsComponent,
        data: {
          title: 'Ticket Details',
          urls: [
            {title: 'Dashboard', url: '/dashboard'},
            {title: 'Ticket Details'}
          ]
        }
      },
      {
        path: 'taskboard',
        component: TaskboardComponent,
        data: {
          title: 'Taskboard',
          urls: [
            {title: 'Dashboard', url: '/dashboard'},
            {title: 'Taskboard'}
          ]
        }
      },
      {
        path: 'fullcalendar',
        component: FullcalendarComponent,
        data: {
          title: 'Full-Calendar',
          urls: [
            {title: 'Dashboard', url: '/dashboard'},
            {title: 'Full-Calendar'}
          ]
        }
      }
    ]
  }
];
