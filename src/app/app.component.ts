import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedTarget = 'timer';

  constructor(private router: Router) {}

  pageChangeHandler(target: string) {
    console.log(target);
    this.selectedTarget = target;
    this.router.navigate([this.selectedTarget]);
  }
}
