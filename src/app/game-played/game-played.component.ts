import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { NonComplete } from '../non-complete';
import { Complete } from '../complete';

@Component({
  selector: 'app-game-played',
  templateUrl: './game-played.component.html',
  styleUrls: ['./game-played.component.css']
})
export class GamePlayedComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataServiceService) { }
  id: number;
  private sub: any;
  completes:Complete[];

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       // In a real app: dispatch action to load the details here.
    });

    this.getApiCompletes();

  }

  getApiCompletes(): void {
    this.dataService.getCompletes().subscribe(temp => { 
      this.completes = temp.filter((team) => (team.hteamid === this.id || team.ateamid === this.id));

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
