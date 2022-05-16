import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

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

  public login(form: NgForm) {
    //TODO
    console.log(JSON.stringify(form.value))
    this.router.navigateByUrl('/rooms');
  }

  public signUp(form: NgForm) {
    //TODO
    console.log(JSON.stringify(form.value))
    this.router.navigateByUrl('/rooms');
  }

}
