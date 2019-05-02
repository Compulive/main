export interface Almacenes {
  almacen_nombre: string;
  almacen_direccion: string;
  almacen_telefono: string;
  almacen_estado: boolean;
  almacen_emisor_sunat: boolean;
  oficina_nombre: string;
  almacen_id: string;

  almacenes: Almacenes[];
}

export class Almacen {
  almacen_id: string;
  almacen_nombre: string;
  almacen_direccion: string;
  almacen_telefono: string;
  almacen_estado: boolean;
  almacen_emisor_sunat: boolean;
  almacen_oficina_id: string;
  oficina_nombre: string;
}

export interface Oficinas {
  oficina_direccion: string;
  oficina_id: number;
  oficina_nombre: string;
  oficina_observacion: string;
  oficina_responsable: string;
  oficina_telefono: string;
  oficina_ubigeo: number;
  oficinas: Oficinas[];
}
