export interface Proveedores {
  proveedor_id: number;
  proveedor_ruc: number;
  proveedor_nombre: string;
  proveedor_importacion: number;
  proveedor_estado_id: number;
  proveedor_email: string;
  proveedor_telefono: string;
  proveedor_direccion: string;
  proveedor_cuenta_contable_id: number;
  proveedor_agente_retencion: number;
  proveedor_ubigeo_id: number;
  proveedor_cuenta_soles: string;
  proveedor_cuenta_dolares: string;
  proveedor_forma_pago_id: number;
  proveedor_exonerado_igv: number;
  proveedores: Proveedores[];
}
