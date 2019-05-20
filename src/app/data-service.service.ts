import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {Team} from './team';
import{Source} from './source';
import {Tip} from './tip';
import {Game} from './game';
import {Complete} from './complete';
import { NonComplete } from './non-complete';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  ngOnInit(){
    // this.getTeams();
    // this.getSources();
  }
  constructor(private http: HttpClient) {}
  // return http for team
  getTeams() : Observable<Team[]> {
   
    return this.http.get('https://api.squiggle.com.au/?q=teams').pipe(
      map((data: any) => data.teams.map((item: any) => new Team(
        item.logo,
        item.id,
        item.name,
        item.abbrev
      )))
    );
  }
  // handle api get scources
  getSources() : Observable<Source[]> {
   
    return this.http.get('https://api.squiggle.com.au/?q=sources').pipe(
      map((data: any) => data.sources.map((item: any) => new Source(
        item.id,
        item.url,
        item.name
      )))
    );
  }
  // get api from complete game
  getCompletes(): Observable<Complete[]>{

    return this.http.get('https://api.squiggle.com.au/?q=games;year=2019;complete=100').pipe(
      map((data:any) => data.games.map((item:any)=>new Complete(
        item.complete,
        item.is_grand_final,
        item.tz,
        item.hbehinds,
        item.ateam,
        item.winnerteamid,
        item.hgoals,
        item.updated,
        item.round,
        item.is_final,
        item.hscore,
        item.abehinds,
        item.winner,
        item.ascore,
        item.hteam,
        item.ateamid,
        item.venue,
        item.hteamid,
        item.agoals,
        item.year,
        item.date,
        item.id
      )))
    );

  }
  // all api from non complete game
  getNonCompletes(): Observable<NonComplete[]>{

    return this.http.get('https://api.squiggle.com.au/?q=tips;year=2019;complete=0;source=1').pipe(
      map((data:any) =>data.tips.map((item:any)=>new NonComplete(
        item.updated,
        item.date,
        item.correct,
        item.tipteamid,
        item.source,
        item.hteamid,
        item.sourceid,
        item.tip,
        item.confidence,
        item.year,
        item.ateamid,
        item.err,
        item.margin,
        item.gameid,
        item.hconfidence,
        item.ateam,
        item.venue,
        item.hteam,
        item.bits,
        item.round
      )))
    );

  }
  // get tip info
  // getTips() : Observable<Tip[]> {
   
  //   return this.http.get('https://api.squiggle.com.au/?q=tips;year=2019;complete=0').pipe(
  //     map((data: any) => data.tips.map((item: any) => new Tip(
  //       item.confidence,
  //       item.bits,
  //       item.gameid,
  //       item.ateamid,
  //       item.venue,
  //       item.year,
  //       item.correct,
  //       item.date,
  //       item.updated,
  //       item.hteam,
  //       item.tipteamid,
  //       item.margin,
  //       item.err,
  //       item.tip,
  //       item.ateam,
  //       item.source,
  //       item.sourceid,
  //       item.hconfidence,
  //       item.hteamid,
  //       item.round
  //     )))
  //   );
  //   }

    // get Game from api
    getGames() : Observable<Game[]> {
   
      return this.http.get('https://api.squiggle.com.au/?q=games;year=2019').pipe(
        map((data: any) => data.games.map((item: any) => new Game(
          item.complete,
          item.is_grand_final,
          item.tz,
          item.hbehinds,
          item.ateam,
          item.winnerteamid,
          item.hgoals,
          item.updated,
          item.round,
          item.is_final,
          item.hscore,
          item.abehinds,
          item.winner,
          item.ascore,
          item.hteam,
          item.ateamid,
          item.venue,
          item.hteamid,
          item.agoals,
          item.year,
          item.date,
          item.id
        )))
      ); 
  }




}
