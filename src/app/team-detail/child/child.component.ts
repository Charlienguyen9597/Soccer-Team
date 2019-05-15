
// let import Input to use on decorator
// Allows us to use @Input
import { Component, OnInit, Input } from '@angular/core';

// Class specification that we will use
//We are going to use this for binding
import {Team} from '../team';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // Specifies team as an input property that it will receive
  //This component will receive a Team Object via the team property
  @Input()team: Team

}
