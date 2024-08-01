import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthStore } from '../store/auth.store';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, HttpClientModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'adventure_atlas';

  store = inject(AuthStore);

  ngOnInit() {
    this.loadUsers()
        .then(() => console.log('Users Loaded!'))
  }

  async loadUsers() {
    await this.store.loadAll()
  } 
}
