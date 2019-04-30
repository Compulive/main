import {Component, OnInit} from '@angular/core';
import {WheezyService} from '../../../provider/wheezy.service';
import {Categorias2} from './models/categoria2';
import {Categoria2} from './models/categoria2';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Categoria2FormComponent} from './components/categoria2-form/categoria2-form.component';
import {Categoria2EditComponent} from './components/categoria2-edit/categoria2-edit.component';

@Component({
  selector: 'app-categoria2-container',
  templateUrl: './categoria2-container.component.html',
  styleUrls: ['./categoria2-container.component.css']
})
export class Categoria2ContainerComponent implements OnInit {
  public categorias2: Categorias2[];
  public error: string;
  public category2 = new Categoria2();
  private url: any = 'categoria2/';

  constructor(private wheezyService: WheezyService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.wheezyService.get$(this.url).subscribe(response => {
      this.categorias2 = response;
    }, error => {
      this.error = error;
    });
  }

  public ondelete(categoria2: Categoria2): void {
    this.wheezyService.delete$(this.url, categoria2.categoria2_id).subscribe(response => {
      this.categorias2 = response;
      console.log(this.categorias2);
    }, error => {
      this.error = error;
    });
  }

  public onOpenEdit(categoria2: Categoria2): void {
    this.wheezyService.getById$(this.url, categoria2.categoria2_id).subscribe(response => {
      this.category2 = response;
      const modalCategoryEdit = this.modalService.open(Categoria2EditComponent);
      modalCategoryEdit.componentInstance.name = this.category2;
      modalCategoryEdit.componentInstance.onCategorySaveEmit.subscribe(($eventEmiter) => {
        this.edit($eventEmiter);
        modalCategoryEdit.close();
      });
      modalCategoryEdit.componentInstance.onCategoryCancelEmit.subscribe(($onCancelEditEmit) => {
        if ($onCancelEditEmit) {
          modalCategoryEdit.close();
        }
      });
    });
  }

  public edit(data: object): void {
    this.wheezyService.update$(this.url, this.category2.categoria2_id, data).subscribe(response => {
      this.categorias2 = response;
      console.log(this.categorias2);
    }, error => {
      this.error = error;
    });
  }
  public onOpenNewForm($event: boolean): void {
    if ($event) {
      const modalCategoryForm = this.modalService.open(Categoria2FormComponent);
      modalCategoryForm.componentInstance.name = this.category2;
      modalCategoryForm.componentInstance.onCategorySaveEmit.subscribe(($eventEmiter) => {
        this.save($eventEmiter);
        modalCategoryForm.close();
      });
      modalCategoryForm.componentInstance.onCategoryCancelEmit.subscribe(($onCancelEditEmit) => {
        if ($onCancelEditEmit) {
          modalCategoryForm.close();
        }
      });
    }
  }

  public save(data: object): void {
    this.wheezyService.post$(this.url, data).subscribe(response => {
      this.categorias2 = response;
      console.log(this.categorias2);
    }, error => {
      this.error = error;
    });

  }
}
