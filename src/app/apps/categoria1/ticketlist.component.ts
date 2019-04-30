import {Component, AfterViewInit} from '@angular/core';
import {WheezyService} from '../../../provider/wheezy.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: './ticketlist.component.html'
})
export class TicketlistComponent implements AfterViewInit {
  public categorias1: [] = [];
  public categoria1: any = {};
  public error: string;
  public closeResult: string;
  private url: any = 'categoria1/';
  public categoryForm: FormGroup;
  constructor(private wheezyService: WheezyService, private modalService: NgbModal, private formBuilder: FormBuilder) {
    this.categoryForm = this.formBuilder.group({
      categoria1_codigo: ['', Validators.required],
      categoria1_descripcion: ['', Validators.required],
      categoria1_descripcion_corta: ['', Validators.required],
    });
  }

  ngAfterViewInit() {
    this.wheezyService.get$(this.url).subscribe(response => {
      this.categorias1 = response;
    }, error => {
      this.error = error;
    });
  }

  public openNewFormCategory(content1): void {
    this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  public cancelform(): void {
    this.categoryForm.reset();
    this.modalService.dismissAll();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  public save(): void {
    if (!this.categoria1.categoria1_id) {
      if (this.categoryForm.valid) {
        this.wheezyService.post$(this.url, this.categoryForm.value).subscribe(response => {
          this.categorias1 = response;
          this.categoryForm.reset();
          this.modalService.dismissAll();
        }, error => {
          this.error = error;
        });
      }

    } else {
      if (this.categoryForm.valid) {
        this.wheezyService.update$(this.url, this.categoria1.categoria1_id, this.categoryForm.value).subscribe(response => {
          this.categoryForm.reset();
          this.categorias1 = response;
          this.modalService.dismissAll();
        }, error => {
          this.error = error;
        });
      }
    }
  }

  public delete(id): void {
    this.wheezyService.delete$(this.url, id).subscribe(response => {
      this.categorias1 = response;
    }, error => {
      this.error = error;
    });
  }

  public edit(content1, id): void {
    this.wheezyService.getById$(this.url, id).subscribe(response => {
      this.categoria1 = response;
      this.categoryForm.patchValue({
        categoria1_codigo: this.categoria1.categoria1_codigo,
        categoria1_descripcion: this.categoria1.categoria1_descripcion,
        categoria1_descripcion_corta: this.categoria1.categoria1_descripcion_corta,
      });
      this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }, error => {
      this.error = error;
    });
  }

}
