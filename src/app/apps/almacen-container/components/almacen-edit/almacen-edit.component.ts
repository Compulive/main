import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Oficinas, Almacen} from '../../models/almacen';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-almacen-edit',
  templateUrl: './almacen-edit.component.html',
  styleUrls: ['./almacen-edit.component.css']
})
export class AlmacenEditComponent implements OnInit {


  @Input() name: Oficinas[];
  @Input() almacen = new Almacen();

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
    if (this.almacen) {
      this.almacenForm.patchValue({
        almacen_nombre: this.almacen.almacen_nombre,
        almacen_oficina_id: this.almacen.almacen_oficina_id,
        almacen_direccion: this.almacen.almacen_direccion,
        almacen_telefono: this.almacen.almacen_telefono,
        almacen_estado: this.almacen.almacen_estado,
        almacen_emisor_sunat: this.almacen.almacen_emisor_sunat,
      });
    }
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
