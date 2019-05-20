import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import {Source} from '../source';
@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {

  sources :Source[];
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getApiSources();
  }
  getApiSources(): void {
    this.dataService.getSources().subscribe(temp => { this.sources = temp;});
  }
}
