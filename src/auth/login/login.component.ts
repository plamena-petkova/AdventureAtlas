import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AuthStore } from '../../store/auth.store';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [
    AuthStore,
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class LoginComponent {
  usernameFormGroup = this._formBuilder.group({
    username: ['', Validators.required],
  });
  passwordFormGroup = this._formBuilder.group({
    password: ['', Validators.required],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  store = inject(AuthStore);

  

  onSubmit() {
    const loginData: any = {
      username: this.usernameFormGroup.value.username!,
      password: this.passwordFormGroup.value.password!,
    };

   
      this.loginUser(loginData)
          .then(() => console.log('User logged!'))
          this.router.navigate(['/']);
  }

  async loginUser(loginData:{username:string, password:string}) {
    try {
      await this.store.login(loginData);
    } catch (e) {
      console.error(e)
    }
    
  } 

}



