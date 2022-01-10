import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  duration = 25;
  constructor() {}

  ngOnInit(): void {}

  applyChange(event: SubmitEvent): void {
    event.preventDefault();
    console.log(this.duration);
  }

  durationChange(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
  }
}
