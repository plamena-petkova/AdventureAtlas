import {Component, inject} from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-snackbar',
  templateUrl: 'snackbar.component.html',
  styleUrl: 'snackbar.component.scss',
  standalone: true,
  imports: [MatButtonModule, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
})
export class Snackbar {
  snackBarRef = inject(MatSnackBarRef);
}
