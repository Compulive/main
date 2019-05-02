import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Almacenes, Almacen} from '../../models/almacen';
import {Categorias2} from '../../../categoria2-container/models/categoria2';

@Component({
  selector: 'app-almacen-list',
  templateUrl: './almacen-list.component.html',
  styleUrls: ['./almacen-list.component.css']
})
export class AlmacenListComponent implements OnInit {
  @Input() almacenes: Almacenes[];
  @Input() categorias2: Categorias2[];
  @Output() ondelete: EventEmitter<object> = new EventEmitter();
  @Output() onOpenNewForm: EventEmitter<boolean> = new EventEmitter();
  @Output() onOpenEdit: EventEmitter<object> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  public openNewFormAlmacen(): void {
    this.onOpenNewForm.emit(true);

  }

  public delete(almacen: Almacen): void {
    this.ondelete.emit(almacen);
  }

  public edit(almacen: Almacen): void {
    this.onOpenEdit.emit(almacen);
  }
}
