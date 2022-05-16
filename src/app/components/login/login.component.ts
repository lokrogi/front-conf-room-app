import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initLogingPage();
    this.signUpFormOnInit();
  }

  public initLogingPage() {
    const toolbar = document.getElementById('toolbar');

    if(toolbar != null) {
      toolbar.style.display = 'none';
    }

  }

  public signUpFormOnInit() {
    const signUpDiv = document.getElementById('signup-div');

    if(signUpDiv != null) {
      signUpDiv.style.display = 'none';
    }
  }

  public openSignUpForm() {
    const signUpDiv = document.getElementById('signup-div');
    const loginDiv = document.getElementById('login-div');

    if(signUpDiv != null) {
      signUpDiv.style.display = 'block';
    }

    if(loginDiv != null) {
      loginDiv.style.display = 'none';
    }
  }

}
