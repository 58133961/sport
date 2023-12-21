import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user:any;
  constructor(private router :Router) { }

  ngOnInit() {

  
  }
  isLoggedIn(){
    let token = sessionStorage.getItem("jwt")
    if (token) {
      this.user=this.decodeToken(token);
    }
    return !!token;

  }

  decodeToken(token:string){
    return jwt_decode(token);
      }
      logout(){
  sessionStorage.removeItem("jwt");
  this.router.navigate([''])
  
}

}
