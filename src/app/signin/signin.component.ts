import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor( private _route:Router, private _http:HttpClient) { }
  signin:FormGroup|any;
  signuser:any;
  ngOnInit(): void {
    this.signin = new FormGroup({
      'fname': new FormControl(),
      'lname':new FormControl(),
      'email':new FormControl(),
      'phone':new FormControl(),
      'password': new FormControl()
    })
  }

  signindata(signin:FormGroup){
    //console.log(this.signup.value);
    this.signuser = this.signin.value.fname
    this._http.post<any>("http://localhost:3000/signin", this.signin.value)
    .subscribe(res=>{
      alert('data added successfully');
      this.signin.reset();
      this._route.navigate(['login']);
    }, err=>{
      alert('Somthing went wrong');
    })

  }

  sbtn(){
   
    this._route.navigate(['login']);
    //$('.form-box1').css('z-index', '99');
    $('.form-box').css('display','block');
    $('.form-box1').css('display','none');
  }
}


