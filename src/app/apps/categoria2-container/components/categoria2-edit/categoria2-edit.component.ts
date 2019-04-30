import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {Categoria2} from '../../models/categoria2';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-categoria2-edit',
  templateUrl: './categoria2-edit.component.html',
  styleUrls: ['./categoria2-edit.component.css']
})
export class Categoria2EditComponent implements OnInit {
  @Input() name = new Categoria2();
  @Output() onCategoryCancelEmit: EventEmitter<boolean> = new EventEmitter();
  @Output() onCategorySaveEmit: EventEmitter<object> = new EventEmitter();

  categoryForm2: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.categoryForm2 = this.formBuilder.group({
      categoria2_codigo: ['', Validators.required],
      categoria2_descripcion: ['', Validators.required],
      categoria2_descripcion_corta: ['', Validators.required],
      categoria2_cat: [8, Validators.required],
    });
  }

  ngOnInit() {
    this.categoryForm2.patchValue({
      categoria2_codigo: this.name.categoria2_codigo,
      categoria2_descripcion: this.name.categoria2_descripcion,
      categoria2_descripcion_corta: this.name.categoria2_descripcion_corta,
    });


  }

  public save(): void {
    this.onCategorySaveEmit.emit(this.categoryForm2.value);
    this.categoryForm2.reset();
  }

  public cancelform(): void {
    this.onCategoryCancelEmit.emit(true);
  }

}
