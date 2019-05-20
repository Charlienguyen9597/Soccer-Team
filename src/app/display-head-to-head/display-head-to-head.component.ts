import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { NonComplete } from '../non-complete';

@Component({
  selector: 'app-display-head-to-head',
  templateUrl: './display-head-to-head.component.html',
  styleUrls: ['./display-head-to-head.component.css']
})
export class DisplayHeadToHeadComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataServiceService) { }
  id: number;
  secondTeamID:number;
  private sub: any;
  error: string;
  nonCompletes:NonComplete[];

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.secondTeamID = +params['secondTeamID']; // (+) converts string 'secondTeamID' to a number
       // In a real app: dispatch action to load the details here.
    });

    this.getApiNoncompletes();

  }

  getApiNoncompletes(): void {
    this.dataService.getNonCompletes().subscribe(temp => { 
      // this.nonCompletes = temp.filter((team) => (team.hteamid === this.id || team.ateamid === this.id));

      // 
      // filter between two teams
      // 
      this.nonCompletes = temp.filter((team) => ((team.hteamid === this.id && team.ateamid === this.secondTeamID) || (team.ateamid === this.id && team.hteamid === this.secondTeamID)));
      if(!this.nonCompletes.length) this.error = "There's not match between those two teams";
    }); 
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
