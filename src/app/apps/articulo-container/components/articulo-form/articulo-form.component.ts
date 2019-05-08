import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Proveedores} from '../../../proveedor-container/models/proveedor';

@Component({
  selector: 'app-articulo-form',
  templateUrl: './articulo-form.component.html',
  styleUrls: ['./articulo-form.component.css']
})
export class ArticuloFormComponent implements OnInit {
  @Input() proveedores: Proveedores[];
  @Output() onArticuloCancelEmit: EventEmitter<boolean> = new EventEmitter();
  @Output() onArticuloSaveEmit: EventEmitter<object> = new EventEmitter();

  public articulo: any = {};

  constructor() {
    this.articulo.articulo_codigo = '';
    this.articulo.articulo_nombre = '';
    this.articulo.articulo_proveedor_id = '';
    this.articulo.articulo_no_stock_item = '';
    this.articulo.articulo_tipo_percenpcion_id = '';
    this.articulo.articulo_tipo_detraccion_id = '';
    this.articulo.articulo_codigo_ean = '';
    this.articulo.articulo_codigo_barra_ventas = '';
    this.articulo.articulo_codigo_barra_compras = '';
    this.articulo.artitulo_um_compra_id = '';
    this.articulo.articulo_um_venta_id = '';
    this.articulo.articulo_factor_compra = '';
    this.articulo.articulo_factor_venta = '';
    this.articulo.articulo_peso = '';
    this.articulo.articulo_volumen = '';
    this.articulo.articulo_stock_minimo = '';
    this.articulo.articulo_stock_maximo = '';
    this.articulo.articulo_aplicar_isc = '';
    this.articulo.articulo_porcentaje_isc = '';
    this.articulo.articulo_cuenta_compras_id = '';
    this.articulo.articulo_cuenta_venta_id = '';
    this.articulo.articulo_cuenta_devolucion_id = '';
    this.articulo.articulo_estado_id = '';
    this.articulo.articulo_cuenta_isc = '';
    this.articulo.articulo_fecha_ingreso = '';
    this.articulo.articulo_ultima_compra = '';
    this.articulo.articulo_ultimo_costo_promedio = '';
    this.articulo.articulo_costo_promedio_soles = '';
    this.articulo.articulo_costo_promedio_dolares = '';
    this.articulo.articulo_imagen = '';
    this.articulo.articulo_categoria1_id = '';
    this.articulo.articulo_categoria2_id = '';
    this.articulo.articulo_categoria3_id = '';
    this.articulo.articulo_categoria4_id = '';
    this.articulo.articulo_categoria5_id = '';
    this.articulo.articulo_codigo_qr = '';
  }

  ngOnInit() {
  }

  public save(): void {
    this.onArticuloSaveEmit.emit(this.articulo);

  }

  public cancelform(): void {
    this.onArticuloCancelEmit.emit(true);
  }
}
