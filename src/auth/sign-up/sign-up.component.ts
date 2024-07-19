import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { IUser } from '../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class SignUpComponent {
  namesFormGroup = this._formBuilder.group({
    names: ['', Validators.required],
  });
  emailFormGroup = this._formBuilder.group({
    email: ['', Validators.required],
  });
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
    const body: IUser = {
      email: this.emailFormGroup.value.email!,
      names: this.namesFormGroup.value.names!,
      username: this.usernameFormGroup.value.username!,
      password: this.passwordFormGroup.value.password!,
    };

    console.log('Body', body);
    this.auth.register(body).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        this.router.navigate(['/']);
      },
      complete: () => {
        console.log('register stream completed');
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
