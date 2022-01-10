import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { finalize, Subscription } from 'rxjs';
import { AppStoreProviderService } from 'src/app/utils/AppStoreProvider.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  duration = 25;
  loading = false;

  constructor(
    private http: HttpClient,
    private appStore: AppStoreProviderService
  ) {
    this.subscription = appStore
      .getDuration()
      .subscribe((duration) => (this.duration = duration));
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {}

  applyChange(event: SubmitEvent): void {
    event.preventDefault();
    this.appStore.setDuration(this.duration);
  }

  durationChange(event: Event) {
    const target = event.target as HTMLInputElement;

    this.duration = parseInt(target.value);
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
