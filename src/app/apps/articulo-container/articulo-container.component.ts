import {Component, OnInit} from '@angular/core';
import {WheezyService} from '../../../provider/wheezy.service';
import {Articulos, Articulo} from './models/articulo';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ArticuloFormComponent} from './components/articulo-form/articulo-form.component';
import {Proveedores} from '../proveedor-container/models/proveedor';

@Component({
  selector: 'app-articulo-container',
  templateUrl: './articulo-container.component.html',
  styleUrls: ['./articulo-container.component.css']
})
export class ArticuloContainerComponent implements OnInit {
  private url: any = 'articulo/';
  public error: string;
  public articulos: Articulos[];
  public articulo = new Articulo();
  public proveedores: Proveedores[];

  constructor(private wheezyService: WheezyService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.getArticulos();
    this.getProveedores();
  }

  public getArticulos(): void {
    this.wheezyService.get$(this.url).subscribe(response => {
      this.articulos = response;
    }, error => {
      this.error = error;
    });
  }

  public onOpenNewForm($event): void {
    if ($event) {
      const modalArticuloForm = this.modalService.open(ArticuloFormComponent, {size: 'lg'});
      modalArticuloForm.componentInstance.proveedores = this.proveedores;
      modalArticuloForm.componentInstance.onArticuloSaveEmit.subscribe(($eventEmiter) => {
        this.save($eventEmiter);
        modalArticuloForm.close();
      });
      modalArticuloForm.componentInstance.onArticuloCancelEmit.subscribe(($onCancelEditEmit) => {
        if ($onCancelEditEmit) {
          modalArticuloForm.close();
        }
      });
    }
  }

  private save(data): void {
    this.wheezyService.post$(this.url, data).subscribe(response => {
      this.articulos = response;
    }, error => {
      this.error = error;
    });
  }

  private getProveedores(): void {
    this.wheezyService.get$('proveedor/').subscribe(response => {
      this.proveedores = response;
    }, error => {
      this.error = error;
    });
  }

}
