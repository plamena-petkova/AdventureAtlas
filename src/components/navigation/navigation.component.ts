import { Component, OnDestroy, signal } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormField } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatListModule, MatButtonModule, MatInputModule, MatDatepickerModule, MatFormField, MatNativeDateModule, RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
 
}



