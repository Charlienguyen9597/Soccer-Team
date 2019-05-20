import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Team} from '../../team';
import{DataServiceService} from '../../data-service.service';

@Component({
  selector: 'app-detail-parent',
  templateUrl: './detail-parent.component.html',
  styleUrls: ['./detail-parent.component.css']
})
export class DetailParentComponent implements OnInit {
  constructor(private route: ActivatedRoute, private dataService:DataServiceService) { }
  id: number;
  private sub: any;
  team: Team;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       // In a real app: dispatch action to load the details here.
    });

    this.getAFLTeam();
  }

  getAFLTeam(): void {
    this.dataService.getTeams().subscribe(temp => { 
      this.team = temp.find((team) => team.id === this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
