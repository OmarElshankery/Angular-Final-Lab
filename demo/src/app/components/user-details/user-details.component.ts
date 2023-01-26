import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId:any;
  user:any;
  constructor(private userService:UserService, private activatedRoute:ActivatedRoute){
    this.userId=this.activatedRoute.snapshot.params['id']
  }
  ngOnInit(): void {
    this.userService.getUserById(this.userId).subscribe((response)=>{
      this.user=response;
    })
  }
}
