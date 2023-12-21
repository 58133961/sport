import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allteams } from 'src/app/Data/temasData';

@Component({
  selector: 'app-teams-info',
  templateUrl: './teams-info.component.html',
  styleUrls: ['./teams-info.component.css']
})
export class TeamsInfoComponent implements OnInit {
  id:any;
  title:string ="team info";
  team:any ={};
  teams:any =allteams;

  constructor( private activatedRoute:ActivatedRoute) {}

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.team=this.teams.find(
      (obj:any) =>{return obj.id == this.id}
    )
  }

}
