import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { ActivatedRoute } from '@angular/router';
import { NonComplete } from '../non-complete';

@Component({
  selector: 'app-next-five-match',
  templateUrl: './next-five-match.component.html',
  styleUrls: ['./next-five-match.component.css']
})
export class NextFiveMatchComponent implements OnInit {

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
      this.nonCompletes = temp.filter((team) => team.hteamid === this.id).slice(0, 5);
    }); 
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
