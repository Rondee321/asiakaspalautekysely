import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  userName = new FormControl('');
  userEmail = new FormControl('');
  constructor() {}
  ngOnInit(): void {}

  saveInfo() {
    console.log(this.userName.value, this.userEmail.value);
  }
}
