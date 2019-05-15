import { Component, OnInit } from '@angular/core';
// need to be import team to see data of team 
import {Team} from '../team';

// using Service to get data
import {TeamService} from '../team.service';

@Component({
  selector: 'app-parrent',
  templateUrl: './parrent.component.html',
  styleUrls: ['./parrent.component.css']
})
export class ParrentComponent implements OnInit {

  selectedTeam: Team;

  teams:Team[];
  
  constructor( private teamService: TeamService) { }

  ngOnInit() {
    this.getTeams();
  }

  onSelect(team:Team):void{
    this.selectedTeam=team;
  }

  getTeams():void{
    this.teams=this.teamService.getTeams();
  }

}
