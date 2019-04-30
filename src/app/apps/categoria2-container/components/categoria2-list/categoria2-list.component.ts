import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Categorias2} from '../../models/categoria2';
import {Categoria2} from '../../models/categoria2';

@Component({
  selector: 'app-categoria2-list',
  templateUrl: './categoria2-list.component.html',
  styleUrls: ['./categoria2-list.component.css']
})
export class Categoria2ListComponent implements OnInit {
  @Input() categorias2: Categorias2[];
  @Output() ondelete: EventEmitter<object> = new EventEmitter();
  @Output() onOpenNewForm: EventEmitter<boolean> = new EventEmitter();
  @Output() onOpenEdit: EventEmitter<object> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  public delete(categoria2: Categoria2): void {
    this.ondelete.emit(categoria2);
  }

  public edit(categoria2: Categoria2): void {
    this.onOpenEdit.emit(categoria2);
  }


  public openNewFormCategory2(): void {
    this.onOpenNewForm.emit(true);
  }
}
