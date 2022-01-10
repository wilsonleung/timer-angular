import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppStoreProviderService {
  private appStore = new BehaviorSubject<number>(25);

  constructor() {}

  getDuration() {
    return this.appStore.asObservable();
  }

  setDuration(duration: number) {
    this.appStore.next(duration);
  }
}
