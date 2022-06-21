import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-get-timer',
  templateUrl: './get-timer.component.html',
  styleUrls: ['./get-timer.component.scss'],
})
export class GetTimerComponent implements OnInit {
  @Output() emitTimer = new EventEmitter<any>();
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
  actionType: string = "";
  constructor() {}

  ngOnInit(): void {}
  sendToParent() {
    this.count++;
    //
    const formatDate = (date: Date) => date.toISOString().slice(0, 10);
    const date = formatDate(new Date());

    const time_format = new Date();
    const time = time_format.toLocaleTimeString();
    this.getTimerObj.timer = +this.getTimer;
    this.getTimerObj.actionType = this.count % 2 == 0 ? 'Pause' : 'Start';
    this.actionType = this.getTimerObj.actionType;
    this.getTimerObj.date = `${date}`;
    this.getTimerObj.time = `${time}`;
    if (this.count % 2 != 0) {
      this.getTimerObj.startCount = this.count;
    }
    if (this.count % 2 == 0) {
      this.getTimerObj.pauseCount = this.count;
    }

    this.emitTimer.emit(this.getTimerObj);
  }
}
