import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { NonComplete } from '../non-complete';

@Component({
  selector: 'app-next-game',
  templateUrl: './next-game.component.html',
  styleUrls: ['./next-game.component.css']
})
export class NextGameComponent implements OnInit {

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
      this.nonCompletes = temp.filter((team) => team.hteamid === this.id).slice(0, 1);
    }); 
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
