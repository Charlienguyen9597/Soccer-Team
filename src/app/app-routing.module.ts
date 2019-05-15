import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NextGameComponent } from './next-game/next-game.component';
import { GamePlayedComponent } from './game-played/game-played.component';
import { NextFiveMatchComponent } from './next-five-match/next-five-match.component';
import { ResultSoFarComponent } from './result-so-far/result-so-far.component';
import { HeadToHeadComponent } from './head-to-head/head-to-head.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
const appRoutes: Routes =[
    {path: 'home',component:HomeComponent},
    {path: 'about-us',component: AboutUsComponent},
    {path: 'contact-us',component:ContactUsComponent},
    {path: 'next-game',component: NextGameComponent},
    {path: 'game-played',component: GamePlayedComponent},
    {path: 'next-five-match',component: NextFiveMatchComponent},
    {path: 'result-so-far',component: ResultSoFarComponent},
    {path: 'head-to-head',component: HeadToHeadComponent},
    {path: 'team-detail',component: TeamDetailComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(
        appRoutes,{
          // this is for deburg purpoes only
          enableTracing:true
        }
      )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
