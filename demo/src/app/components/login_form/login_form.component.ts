import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './login_form.component.html',
  styleUrls: ['./login_form.component.css']
})
export class UserFormComponent {
  userId:any;
  constructor(private router:Router,
    private userService:UserService,
    private activatedRoute:ActivatedRoute
    ){
      this.userId=this.activatedRoute.snapshot.params['id']
    }
  loginForm= new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-z]{4}$/)]),
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',[Validators.minLength(3),Validators.required]),
  })
  get getName(){
    return this.loginForm.controls['name']
  }
  get getEmail(){
    return this.loginForm.controls['email']
  }
  get getPassword(){
    return this.loginForm.controls['password']
  }
  
  login(){
    if(this.loginForm.status=='VALID'){
      if(this.userId){
        this.userService.editUser(this.userId,this.loginForm.value).subscribe((response)=>{
            console.log(response);
            
          })
        this.router.navigate(['/users'])
      }else{
        this.userService.addUser(this.loginForm.value).subscribe((response)=>{
          console.log(response);
        })
      }
    }else{
      console.log("Error");
      
    }
  }
}
