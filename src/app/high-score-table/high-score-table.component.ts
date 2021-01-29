import { Component, Input, OnInit } from '@angular/core';
import { IScore } from '../game.service';

@Component({
  selector: 'app-high-score-table',
  templateUrl: './high-score-table.component.html',
  styleUrls: ['./high-score-table.component.scss']
})
export class HighScoreTableComponent implements OnInit {

  @Input() scores: IScore[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
