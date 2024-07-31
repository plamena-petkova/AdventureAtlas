import { Component, inject, OnDestroy, signal } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormField } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthStore } from '../../store/auth.store';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule, MatInputModule, MatDatepickerModule, MatFormField, MatNativeDateModule, RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  store = inject(AuthStore);

  currentUser$ = this.store.currentUser;


    onLogout():void {
        this.store.logout();
    }
 
}



