import {
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  interval,
  Observable,
  ObservableInput,
  Subject,
  Subscription,
  takeUntil,
} from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-show-timer',
  templateUrl: './show-timer.component.html',
  styleUrls: ['./show-timer.component.scss'],
})
export class ShowTimerComponent implements OnChanges, OnDestroy {
  @Input()
  timerValue: {
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
  @Output() emitPausedValue = new EventEmitter<any>();
  countDownSubscriber: Subscription = new Subscription();
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log("Timer from Show component: ", this.timerValue)
    if (this.timerValue.timer <= 0 || this.timerValue.actionType.toLowerCase() == "pause") {
      this.countDownSubscriber.unsubscribe();
      return;
    }
    this.countDownSubscriber = interval(1000)
      .pipe(
        take(this.timerValue.timer),
        map((count) => this.timerValue.timer - 1)
      )
      .subscribe((timer) => {
        this.timerValue.timer = timer;
      });
  }

  emitPausedValueToParent(){
    this.emitPausedValue.emit(this.timerValue.timer);
  }
  ngOnDestroy(): void {
    this.countDownSubscriber.unsubscribe();
  }
}
