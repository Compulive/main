import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-categoria2-form',
  templateUrl: './categoria2-form.component.html',
  styleUrls: ['./categoria2-form.component.css']
})
export class Categoria2FormComponent implements OnInit {
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
  }
  public save(): void {
    this.onCategorySaveEmit.emit(this.categoryForm2.value);
    this.categoryForm2.reset();
  }

  public cancelform(): void {
    this.onCategoryCancelEmit.emit(true);
  }
}
