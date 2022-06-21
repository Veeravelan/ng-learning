import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-show-timer',
  templateUrl: './show-timer.component.html',
  styleUrls: ['./show-timer.component.scss'],
})
export class ShowTimerComponent implements OnChanges, OnDestroy {
  @Input() timerValue: {
    timer: number;
    actionType: string;
    date: string;
    time: string;
    startCount: number;
    pauseCount: number;
  } = {
    timer: 0,
    actionType: '',
    date: '',
    time: '',
    startCount: 0,
    pauseCount: 0,
  };
  countDownSubscriber: Subscription = new Subscription();
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    this.countDownSubscriber = interval(1000)
      .pipe(
        take(this.timerValue.timer),
        map((count) => this.timerValue.timer - 1)
      )
      .subscribe((timer) => {
        this.timerValue.timer = timer;
      });
  }
  ngOnDestroy(): void {
    //if (this.timerValue === 0) this.countDownSubscriber.unsubscribe();
  }
}
