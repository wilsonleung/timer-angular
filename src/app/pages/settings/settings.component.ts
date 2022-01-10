import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, finalize, pipe, throwError } from 'rxjs';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  duration = 25;
  loading = false;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  applyChange(event: SubmitEvent): void {
    event.preventDefault();
    console.log(this.duration);
  }

  durationChange(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
  }

  applyRandomDuration(_: MouseEvent) {
    this.loading = true;
    try {
      this.http
        .get<string>(
          'https://www.random.org/integers/?num=1&min=1&max=60&col=1&base=10&format=plain&rnd=new'
        )
        .pipe(finalize(() => (this.loading = false)))
        .subscribe((response) => (this.duration = parseInt(response)));
    } catch (error) {
      console.error(error);
    }
  }
}
