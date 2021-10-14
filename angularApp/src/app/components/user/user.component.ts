import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servises/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  id: string;
  constructor(private userservice: UserService) {
  }

  ngOnInit(): void {
  }
  getUserName() {
    this.userservice.getUserName(this.id).subscribe(res => {

      this.name = res.name; { err => console.log(err); }
    })
  }

}
