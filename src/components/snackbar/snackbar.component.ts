import {Component} from '@angular/core';
import {MatSnackBar, MatSnackBarAction, MatSnackBarActions, MatSnackBarLabel} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-snackbar',
  templateUrl: 'snackbar.component.html',
  styleUrl: 'snackbar.component.scss',
  standalone: true,
  imports: [MatButtonModule, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
})
export class Snackbar {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
