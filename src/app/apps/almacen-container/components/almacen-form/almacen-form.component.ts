import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {Oficinas} from '../../models/almacen';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-almacen-form',
  templateUrl: './almacen-form.component.html',
  styleUrls: ['./almacen-form.component.css']
})
export class AlmacenFormComponent implements OnInit {

  @Input() name: Oficinas[];
  @Output() onAlmacenCancelEmit: EventEmitter<boolean> = new EventEmitter();
  @Output() onAlmacenSaveEmit: EventEmitter<object> = new EventEmitter();
  almacenForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.almacenForm = this.formBuilder.group({
      almacen_nombre: ['', Validators.required],
      almacen_oficina_id: ['', Validators.required],
      almacen_direccion: ['', Validators.required],
      almacen_telefono: ['', Validators.required],
      almacen_estado: [true, Validators.required],
      almacen_emisor_sunat: [false, Validators.required],
    });
  }


  ngOnInit() {
  }

  public save(): void {
    this.onAlmacenSaveEmit.emit(this.almacenForm.value);
    this.almacenForm.reset();
  }

  public cancelform(): void {
    this.onAlmacenCancelEmit.emit(true);
    this.almacenForm.reset();
  }
}
