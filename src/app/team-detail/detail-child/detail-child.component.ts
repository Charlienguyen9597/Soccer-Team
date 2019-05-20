import { Component, OnInit, Input } from '@angular/core';
import {Team} from '../../team';
@Component({
  selector: 'app-detail-child',
  templateUrl: './detail-child.component.html',
  styleUrls: ['./detail-child.component.css']
})
export class DetailChildComponent implements OnInit {
  @Input() team: Team;
  constructor() { }

  ngOnInit() {
  }

}
