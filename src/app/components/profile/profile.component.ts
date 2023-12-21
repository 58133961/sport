import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
userId:any;
obj :any={};
  constructor(private activatedRoute : ActivatedRoute, private userService :UserService) { }

  ngOnInit() {

    this.userId = this.activatedRoute.snapshot.paramMap.get("id")
    
    if (this.userId) {
    
     this.userService.getUserById(this.userId).subscribe(
      
      (data)=>{
        console.log('here is match obj',data.findUser);
        this.obj=data.findUser;
      }
     );
    }
  }
}
