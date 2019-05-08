import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Articulos, Articulo} from '../../models/articulo';
import {Categoria2} from '../../../categoria2-container/models/categoria2';

@Component({
  selector: 'app-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.css']
})
export class ArticuloListComponent implements OnInit {
  @Input() articulos: Articulos[];
  @Output() ondelete: EventEmitter<object> = new EventEmitter();
  @Output() onOpenNewForm: EventEmitter<boolean> = new EventEmitter();
  @Output() onOpenEdit: EventEmitter<object> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  public delete(articulo: Articulo): void {
    this.ondelete.emit(articulo);
  }

  public edit(articulo: Articulo): void {
    this.onOpenEdit.emit(articulo);
  }

  public openNewFormArticulo(): void {
    this.onOpenNewForm.emit(true);
  }
}
