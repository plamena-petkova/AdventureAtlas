import {Component} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { CommonModule } from '@angular/common';

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
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
  
})
export class SignUpComponent {

  

  namesFormGroup = this._formBuilder.group({
    names: ['', Validators.required],
  });
  usernameFormGroup = this._formBuilder.group({
    username: ['', Validators.required],
  });
  passwordFormGroup = this._formBuilder.group({
    password: ['', Validators.required],
  });
  
  logInput(): void {
    console.log(this.namesFormGroup.controls.names.value);
    console.log(this.usernameFormGroup.controls.username.value);
    console.log(this.passwordFormGroup.controls.password.value);
  }

  constructor(private _formBuilder: FormBuilder) {}
}
