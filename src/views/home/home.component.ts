import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { WorkflowComponent } from '../../components/workflow/workflow.component';
import { PopularPlacesComponent } from '../../components/popular-places/popular-places.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigationComponent, WorkflowComponent, PopularPlacesComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
