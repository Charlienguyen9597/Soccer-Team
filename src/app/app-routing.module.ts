import { NgModule, Component }             from '@angular/core';
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
import {ListTeamComponent} from './list-team/list-team.component';
import {SourcesComponent} from './sources/sources.component';
import {DetailParentComponent} from './team-detail/detail-parent/detail-parent.component';
import {DisplayHeadToHeadComponent} from './display-head-to-head/display-head-to-head.component';
const appRoutes: Routes =[
    {path: 'home',component:HomeComponent},
    {path: 'about-us',component: AboutUsComponent},
    {path: 'contact-us',component:ContactUsComponent},
    // {path: 'next-game',component: NextGameComponent},
    // {path: 'game-played',component: GamePlayedComponent},
    // {path: 'next-five-match',component: NextFiveMatchComponent},
    // {path: 'result-so-far',component: ResultSoFarComponent},
    // {path: 'head-to-head',component: HeadToHeadComponent},
    // {path: 'list-team',component:ListTeamComponent},
    // {path: 'team-detail',component: TeamDetailComponent},
    {path: 'sources', component:SourcesComponent},
    // {path: 'team-detail/detail-parent',component:DetailParentComponent},

    {path: 'teams', component: ListTeamComponent},
    {path: 'teams/:id', component: DetailParentComponent},
    {path: 'teams/:id/results', component: ResultSoFarComponent},
    {path: 'teams/:id/head-to-head', component: HeadToHeadComponent}, // for choosing a second team
    {path: 'teams/:id/head-to-head/:secondTeamID', component: DisplayHeadToHeadComponent}, // two display games between two teams
    {path: 'teams/:id/next-game', component: NextGameComponent},
    {path: 'teams/:id/next-five-match', component: NextFiveMatchComponent},
    {path: 'teams/:id/game-played', component: GamePlayedComponent}

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
