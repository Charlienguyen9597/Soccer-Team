import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Team} from '../team';
import { DataServiceService } from '../data-service.service';
import { NonComplete } from '../non-complete';

@Component({
  selector: 'app-result-so-far',
  templateUrl: './result-so-far.component.html',
  styleUrls: ['./result-so-far.component.css']
})
export class ResultSoFarComponent implements OnInit {
  constructor(private route: ActivatedRoute, private dataService: DataServiceService) { }
  id: number;
  private sub: any;
  nonCompletes:NonComplete[];

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       // In a real app: dispatch action to load the details here.
    });

    this.getApiNoncompletes();

  }

  getApiNoncompletes(): void {
    this.dataService.getNonCompletes().subscribe(temp => { 
      this.nonCompletes = temp.filter((team) => (team.hteamid === this.id || team.ateamid === this.id));

      // 
      // filter between two teams
      // 
      // this.nonCompletes = temp.filter((team) => ((team.hteamid === this.id && team.ateamid === this.secondTeamID) || (team.ateamid === this.id && team.hteamid === this.secondTeamID))).slice(0, 7);
    }); 
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
