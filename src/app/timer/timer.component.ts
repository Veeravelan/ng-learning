import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {

  }

  fromShowTimer(timer: any) {
    this.timerValue = timer;
    console.log('Timer from child is: ', timer);
  }
  resetTimer(timer: any) {
    this.timerValue = timer;
    console.log('Timer from reset is: ', timer);
  }
}
