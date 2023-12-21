import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input()a:any;
  actualDate:Date;

  constructor() { }

  ngOnInit() {
    this.actualDate=new Date
  }

}