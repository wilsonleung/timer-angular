import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppStoreProviderService } from 'src/app/utils/AppStoreProvider.service';

const oneSecond = 1000;

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  counting = false;
  countDownString = '';

  constructor(private appStore: AppStoreProviderService) {
    this.subscription = this.appStore.getDuration().subscribe((duration) => {
      this.countDownString = this.toCountDownString(duration * 60 * oneSecond);
    });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  toCountDownString(millSecond: number) {
    const mins = parseInt(String(millSecond / (60 * oneSecond)));
    const seconds = (millSecond - mins * 60 * oneSecond) / oneSecond;
    return `${String(mins).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0'
    )}`;
  }
}
