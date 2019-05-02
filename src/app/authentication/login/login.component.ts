import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {WheezyService} from '../../../provider/wheezy.service';
import {Router} from '@angular/router';
import {json} from 'd3-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup;
  private url: any = 'login/';
  public error: string;

  constructor(private formBuilder: FormBuilder, private wheezyService: WheezyService, private router: Router) {

    if (localStorage.getItem('token') && localStorage.getItem('login')) {
      this.router.navigate(['/dashboard/classic']);
    } else {
      console.log('no logeado');
    }

    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      contrasenia: ['', Validators.required]
    });
  }

  loginform = true;
  recoverform = false;

  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }

  public login(): void {
    if (this.loginForm.valid) {
      this.wheezyService.login$(this.url, this.loginForm.value).subscribe(response => {
        if (response.success) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('login', response.success);
          localStorage.setItem('usuario', JSON.stringify(response.data.usuario));
          localStorage.setItem('correo', JSON.stringify(response.data.correo_electronico));
          this.router.navigate(['/dashboard/classic']);
        }
      }, error => {
        this.error = error;
      });
    }
    console.log(this.loginForm.value);
  }
}
