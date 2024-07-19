import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { IUser } from '../../interfaces/user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

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

  onSubmit() {
    const loginData: any = {
      username: this.usernameFormGroup.value.username!,
      password: this.passwordFormGroup.value.password!,
    };

    
    this.auth.login(loginData).subscribe({
      next: (response:any) => {
        console.log('Login successful', response);
        this.router.navigate(['/']);
      },
      complete: () => {
        console.log('login stream completed');
      },
      error: (err:any) => {
        console.error(err);
      },
    });
  }
}
