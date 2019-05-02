import {Component, OnInit} from '@angular/core';
import {Almacenes, Oficinas, Almacen} from './models/almacen';
import {WheezyService} from '../../../provider/wheezy.service';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AlmacenFormComponent} from './components/almacen-form/almacen-form.component';
import {Categoria2EditComponent} from '../categoria2-container/components/categoria2-edit/categoria2-edit.component';
import {AlmacenEditComponent} from './components/almacen-edit/almacen-edit.component';

@Component({
  selector: 'app-almacen-container',
  templateUrl: './almacen-container.component.html',
  styleUrls: ['./almacen-container.component.css']
})
export class AlmacenContainerComponent implements OnInit {
  public almacenes: Almacenes[];
  private url: any = 'almacen/';
  public error: string;
  public oficinas: Oficinas[];
  public almacen = new Almacen();

  constructor(private wheezyService: WheezyService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.wheezyService.get$(this.url).subscribe(response => {
      this.almacenes = response;
    }, error => {
      this.error = error;
    });
    this.getOficinas();
  }

  public onOpenNewForm($event: boolean): void {
    if ($event) {
      const modalAlmacenForm = this.modalService.open(AlmacenFormComponent);
      modalAlmacenForm.componentInstance.name = this.oficinas;
      modalAlmacenForm.componentInstance.onAlmacenSaveEmit.subscribe(($eventEmiter) => {
        this.save($eventEmiter);
        modalAlmacenForm.close();
      });
      modalAlmacenForm.componentInstance.onAlmacenCancelEmit.subscribe(($onCancelEditEmit) => {
        if ($onCancelEditEmit) {
          modalAlmacenForm.close();
        }
      });
    }
  }

  public getOficinas(): void {
    this.wheezyService.get$('oficina').subscribe(response => {
      this.oficinas = response;
    });
  }

  public save(data: object) {
    this.wheezyService.post$(this.url, data).subscribe(response => {
      this.almacenes = response;
    }, error => {
      this.error = error;
    });
  }

  public onOpenEdit($event: Almacen): void {
    this.wheezyService.getById$(this.url, $event.almacen_id).subscribe(response => {
      this.almacen = response;
      const modalAlmacenEdit = this.modalService.open(AlmacenEditComponent);
      modalAlmacenEdit.componentInstance.name = this.oficinas;
      modalAlmacenEdit.componentInstance.almacen = this.almacen;
      modalAlmacenEdit.componentInstance.onAlmacenSaveEmit.subscribe(($eventEmiter) => {
        this.edit($eventEmiter);
        modalAlmacenEdit.close();
      });
      modalAlmacenEdit.componentInstance.onAlmacenCancelEmit.subscribe(($onCancelEditEmit) => {
        if ($onCancelEditEmit) {
          modalAlmacenEdit.close();
        }
      });
    }, error => {
      this.error = error;
    });
  }

  public edit(data): void {
    this.wheezyService.update$(this.url, this.almacen.almacen_id, data).subscribe(response => {
      this.almacenes = response;
    }, error => {
      this.error = error;
    });
  }

  public ondelete($event: Almacen): void {
    this.wheezyService.delete$(this.url, $event.almacen_id).subscribe(response => {
      this.almacenes = response;
    }, error => {
      this.error = error;
    });
  }

}
