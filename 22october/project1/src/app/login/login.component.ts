import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class loginComponent implements OnInit {

  formData = {
    username: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  Login() {
    if(this.formData.username === 'user' && this.formData.password === 'pass') {
      console.log('Connected');
    } else {
      console.log('Connection failed');
    }
  }

}
