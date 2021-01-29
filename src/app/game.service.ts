import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export enum Mode {
  Sec5 = 5,
  Sec10 = 10,
  Sec15 = 15,
}

export interface IScore {
  username: string,
  mode: Mode,
  score: number,
}

@Injectable({
  providedIn: 'root'
})
export class GameService {

  username: string = '';
  currentMode?: Mode;
  count?: number;
  highScores: IScore[] = [];
  gameInProgress: boolean = false;
  onGameFinished: Subject<void> = new Subject();
  onClick: Subject<number> = new Subject<number>();
  onTimer: Subject<number> = new Subject<number>();
  interval?: number;
  clicks: number = 0;

  constructor() { 
    const scores = localStorage.getItem('scores');
    if (scores) {
      this.highScores = JSON.parse(scores);
    }
  }

  addScore(score: IScore): IScore[] {
    const oldScore = this.highScores.find((val) => {
      return val.username === this.username && val.mode === this.currentMode;
    });
    if (oldScore) {
      if (oldScore.score < score.score) oldScore.score = score.score;
    } else {
      this.highScores.push(score);
    }

    localStorage.setItem('scores', JSON.stringify(this.highScores));
    const filteredScores = this.highScores.filter(score => {
      if (score.mode === this.currentMode) return true;
      else return false;
    });
    filteredScores.sort((a, b) => {
      return b.score - a.score;
    });
    return filteredScores;
  }

  click() {
    if (!this.gameInProgress) {
      this.gameInProgress = true;
      this.clicks = 0;
      this.count = this.currentMode;
      this.interval = window.setInterval(() => {
        if (!this.count) {
          this.gameInProgress = false;
          clearInterval(this.interval);
          return;
        }
        this.count--;
        this.onTimer.next(this.count);
        if (this.count === 0) {
          this.onGameFinished.next();
          this.gameInProgress = false;
          clearInterval(this.interval);
        }
      }, 1000);
      this.onClick.next(0);
    } else {
      this.clicks++;
      this.onClick.next(this.clicks);
    }
  }
}
