import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-app-welcome',
  templateUrl: './app-welcome.component.html',
  styleUrls: ['./app-welcome.component.scss']
})
export class AppWelcomeComponent implements OnInit {

  username: string = '';

  constructor(private router: Router, private game: GameService) { }

  ngOnInit(): void {
  }

  play(): void {
    if (!this.username) return;
    this.game.username = this.username.trim();
    this.router.navigateByUrl('/play');
  }

}
