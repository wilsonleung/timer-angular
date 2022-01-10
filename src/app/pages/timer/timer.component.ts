import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppStoreProviderService } from 'src/app/utils/AppStoreProvider.service';

const oneSecond = 1000;

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnDestroy {
  subscription: Subscription;
  duration: number = 0;
  showMsg = false;
  counting = false;
  countDownString = '';
  cancel: number = -1;

  constructor(private appStore: AppStoreProviderService) {
    this.subscription = this.appStore.getDuration().subscribe((duration) => {
      this.duration = duration;
      this.countDownString = this.toCountDownString(duration * 60 * oneSecond);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    if (this.cancel) {
      window.clearInterval(this.cancel);
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

  startCountDown() {
    console.log('[startCountDown] ...');

    this.counting = true;
    this.countDownString = this.toCountDownString(
      this.duration * 60 * oneSecond
    );

    let tempDuration = this.duration * 60 * oneSecond;
    this.cancel = window.setInterval(() => {
      tempDuration = tempDuration - oneSecond;
      this.countDownString = this.toCountDownString(tempDuration);

      if (tempDuration === 0) {
        window.clearInterval(this.cancel);
        this.counting = false;
        this.showMsg = true;
      }
    }, 1000);
  }

  stopCountDown() {
    console.log('[stopCountDown] ...');
    this.counting = false;
    if (this.cancel) {
      window.clearInterval(this.cancel);
    }
  }

  closeMsg() {
    this.showMsg = false;
    this.counting = false;
    this.countDownString = this.toCountDownString(
      this.duration * 60 * oneSecond
    );
  }
}
