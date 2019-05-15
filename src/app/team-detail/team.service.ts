import { Injectable } from '@angular/core';
import {Team} from './team'

// injectable make team service to have injected dependencies
// 
@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }
  teams= [
    new Team (
        1, "Adelaide","ADE", "https://squiggle.com.au/wp-content/themes/squiggle/assets/images/Adelaide.jpg"
    ),
    new Team(
        2, "Brisbane Lions","BRI","https://squiggle.com.au/wp-content/themes/squiggle/assets/images/Brisbane.jpg"
    ),
    new Team(
      3, "Carlton","CAR","https://squiggle.com.au/wp-content/themes/squiggle/assets/images/Carlton.jpg"
    )
  ];
  
  getTeams():Team[]{
    return this.teams;
  }

}
