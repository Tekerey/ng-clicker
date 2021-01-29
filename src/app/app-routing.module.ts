import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPlayComponent } from './app-play/app-play.component';
import { AppWelcomeComponent } from './app-welcome/app-welcome.component';

const routes: Routes = [
  {path: '', component: AppWelcomeComponent},
  {path: 'play', component: AppPlayComponent},
  {path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
