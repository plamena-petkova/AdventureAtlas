import { Component, OnDestroy, signal } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCalendar, MatDatepickerModule} from '@angular/material/datepicker';
import { Subject } from 'rxjs';
import { DateAdapter, MatDateFormats } from '@angular/material/core';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatListModule, MatButtonModule, MatInputModule, MatDatepickerModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
 
}



