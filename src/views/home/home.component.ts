import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { WorkflowComponent } from '../../components/workflow/workflow.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigationComponent, WorkflowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
