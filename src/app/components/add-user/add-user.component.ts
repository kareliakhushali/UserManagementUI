import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserRequest : User = {
    id: '',
    firstName:'',
    lastName:'',
    email:'',
    gender:'',
    hobbies: '',
    dateOfBirth:'',
    ImageUpload:''



  }

  constructor(private userService : UserService,private router:Router)
  {

  }
    ngOnInit(): void {

    }
    addUser()
    {
    //  this.addUserRequest.dateOfBirth = this.datePipe.transform(this.addUserRequest.dateOfBirth, 'yyyy-MM-dd');
      this.userService.addUser(this.addUserRequest)
      .subscribe({
       next:(user)=>{

        this.router.navigate(['users']);

        console.log(user);


       } ,
       error:(response) =>
      {
        console.log(response);
      }
      });


    }


}
