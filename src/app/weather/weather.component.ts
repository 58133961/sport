import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from '../service/search.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  title:string="search By city"
  weather:any;
  weatherForm:FormGroup;
  city:any={};
  constructor(private searchService : SearchService , private formBuilder:FormBuilder) { }

  ngOnInit() {

    this.weatherForm = this.formBuilder.group({
      city: ['',[Validators.required,Validators.minLength(6)]],
    
    })
  }

  Search(){
    this.searchService.addcity(this.weatherForm.value).subscribe(
      (data) => {
          console.log('here data', data.result);
         
this.weather=data.result
      }
    );

  }




}
