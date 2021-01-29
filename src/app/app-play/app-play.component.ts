import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameService, IScore } from '../game.service';

@Component({
  selector: 'app-app-play',
  templateUrl: './app-play.component.html',
  styleUrls: ['./app-play.component.scss']
})
export class AppPlayComponent implements OnInit, OnDestroy {

  username: string = '';
  scoresToDisplay: IScore[] = [];
  modeSelected: boolean = false;
  gameFinished: boolean = false;
  gameStarted: boolean = false;
  clicksCount: string | number = 'Click me to start!';
  timer: number = 0;

  subGameFinished?: Subscription;
  subClick?: Subscription;
  subTimer?: Subscription;

  constructor(private game: GameService, private router: Router) { }

  ngOnInit(): void {
    this.username = this.game.username;
    this.subGameFinished = this.game.onGameFinished.subscribe(() => {
      console.log('Game finished');
      console.log(`Score: ${this.clicksCount}`);
      this.gameFinished = true;
      this.scoresToDisplay = this.game.addScore({
        username: this.username,
        score: this.clicksCount,
        mode: this.game.currentMode,
      } as IScore);
    });
    this.subClick = this.game.onClick.subscribe((value: number) => {
      this.clicksCount = value;
    });
    this.subTimer = this.game.onTimer.subscribe((value) => {
      this.timer = value;
    });

    this.setMode({target: {value: 10}});
  }

  ngOnDestroy(): void {
    this.subClick?.unsubscribe();
    this.subGameFinished?.unsubscribe();
    this.subTimer?.unsubscribe();
  }

  reset(): void {
    this.clicksCount = 'Click me to start!';
    this.gameFinished = false;
    this.gameStarted = false;
    this.timer = this.game.currentMode || 5;
  }

  setMode(event: any): void {
    const value = +event.target.value;
    this.game.currentMode = value;
    this.timer = value;
    this.modeSelected = true;

    this.scoresToDisplay = this.game.highScores.filter(score => {
      if (score.mode === this.game.currentMode) return true;
      else return false;
    }).sort((a, b) => {
      return b.score - a.score;
    });
  }

  changeUserName(): void {
    this.router.navigateByUrl('/');
  }

  handleClick(): void {
    if (!this.gameStarted) {
      this.gameStarted = true;
      this.gameFinished = false;
    }
    this.game.click();
  }
}
