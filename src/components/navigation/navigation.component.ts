import { Component, inject, OnDestroy, OnInit, Signal, signal } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormField } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthStore } from '../../store/auth.store';
import { CommonModule, JsonPipe } from '@angular/common';
import { IUser } from '../../interfaces/user';
import { Snackbar } from "../snackbar/snackbar.component";


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [JsonPipe, Snackbar, CommonModule, MatListModule, MatButtonModule, MatInputModule, MatDatepickerModule, MatFormField, MatNativeDateModule, RouterLink, RouterLinkActive],
  providers:[AuthStore],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit{
  store = inject(AuthStore);

ngOnInit(): void {
  const user = this.store.currentUser;
  console.log('User', user);
}

async loadUsers() {
  await this.store.loadAll();
}

  onLogout() {
    this.store.logout();
  }
  
}



