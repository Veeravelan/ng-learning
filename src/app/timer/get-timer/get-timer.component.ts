import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-get-timer',
  templateUrl: './get-timer.component.html',
  styleUrls: ['./get-timer.component.scss'],
})
export class GetTimerComponent implements OnInit, OnChanges {
  @Output() emitTimer = new EventEmitter<any>();
  @Output() resetTimerObj = new EventEmitter<any>();
  @Input() updatedTime;
  getTimerObj: {
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
  getTimer: any;
  count: number = 0;
  sCount: number = 0;
  pCount: number = 0;
  actionType: string = '';
  date: string = '';
  time: string = '';
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Updated time is: ", this.updatedTime);
  }

  ngOnInit(): void {
    // console.log("Updated time is: ", this.updatedTime);
  }

  sendToParent() {
    this.countdownTimer();
    this.emitTimer.emit(this.getTimerObj);
  }

  resetTimer() {
    this.count = 0;
    this.formatDateTime();
    this.getTimer = 0;
    this.getTimerObj = {
      timer: 0,
      actionType: 'Reset',
      date: this.date,
      time: this.time,
      startCount: 0,
      pauseCount: 0,
    };
    this.resetTimerObj.emit(this.getTimerObj)
  }
  countdownTimer() {
    this.formatDateTime();
    this.count++;
    this.actionType = this.getTimerObj.actionType;
    this.getTimerObj.timer = +this.getTimer;
    this.getTimerObj.actionType = this.count % 2 == 0 ? 'Pause' : 'Start';
    this.getTimerObj.date = this.date;
    this.getTimerObj.time = this.time;
    if (this.count % 2 != 0) {
      this.sCount++;
      this.getTimerObj.startCount = this.sCount;
    }
    if (this.count % 2 == 0) {
      this.pCount++;
      this.getTimerObj.pauseCount = this.pCount;
    }
    this.getTimerObj = Object.assign({}, this.getTimerObj);
  }

  formatDateTime() {
    // Format date
    const date_format = (date: Date) => date.toISOString().slice(0, 10);
    this.date = date_format(new Date());
    // Format time
    const time_format = new Date();
    this.time = time_format.toLocaleTimeString();
  }
}
